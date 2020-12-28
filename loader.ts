import glob from "glob";
import matter from "gray-matter";
export type PostData = {
  path: string;
  title?: string;
  subtitle?: string;
  content: string;
  datePublished?: number;
  author?: string;
  authorTitle?: string;
  authorPhoto?: string;
  tags?: string[];
  bannerPhoto?: string;
  thumbnailPhoto?: string;
};

type RawFile = { path: string; contents: string };

export const loadMarkdownFile = async (path: string): Promise<RawFile> => {
  const mdFile = await import(`./md/${path}`);
  return { path, contents: mdFile.default };
};

export const mdToPost = (file: RawFile): PostData => {
  const metadata = matter(file.contents);

  const post = {
    path: file.path.replace(".md", ""),
    title: metadata.data.title || null,
    subtitle: metadata.data.subtitle || null,
    datePublished: metadata.data.datePublished || null,
    tags: metadata.data.tags || null,
    author: metadata.data.author || null,
    authorTitle: metadata.data.authorTitle || null,
    authorPhoto: metadata.data.authorPhoto || null,
    bannerPhoto: metadata.data.bannerPhoto || null,
    thumbnailPhoto: metadata.data.thumbnailPhoto || null,
    content: metadata.content,
  };

  if (!post.title) throw new Error(`Missing: title.`);
  if (!post.content) throw new Error(`Missing: content.`);

  return post as PostData;
};

export const loadMarkdownFiles = async (path: string): Promise<PostData[]> => {
  const blogPaths = glob.sync(`./md/${path}`);
  const postDataList: PostData[] = await Promise.all(
    blogPaths.map(
      async (blogPath: string): Promise<PostData> => {
        const mdPath = blogPath.slice(blogPath.indexOf(`md/`) + 3);
        const mdContents = await loadMarkdownFile(`${mdPath}`);
        return mdToPost(mdContents);
      }
    )
  );
  postDataList.sort((a: PostData, b: PostData): number => {
    if (a.datePublished && b.datePublished) {
      return a.datePublished - b.datePublished;
    } else if (!a.datePublished && !b.datePublished) {
      return 0;
    } else if (!a.datePublished) {
      return -1;
    } else if (!b.datePublished) {
      return 1;
    }
    throw new Error("Shouldn't be reachable");
  });
  postDataList.reverse();
  return postDataList;
};

export const loadPost = async (path: string): Promise<PostData> => {
  const file = await loadMarkdownFile(path);
  return mdToPost(file);
};

export const loadBlogPosts = async (): Promise<PostData[]> => {
  return await loadMarkdownFiles(`blog/*.md`);
};
