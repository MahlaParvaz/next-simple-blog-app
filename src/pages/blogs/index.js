import CategoryDesktop from '@/components/posts/CategoryDesktop';
import CategoryMobile from '@/components/posts/CategoryMobile';
import PostList from '@/components/posts/PostList';
import SortBar from '@/components/posts/SortBar';
import Layout from '@/containers/Layout';
import http from '@/services/httpService';
import axios from 'axios';

export default function BlogPage({ blogsData, postCategories }) {
  return (
    <Layout>
      <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
        <CategoryMobile postCategories={postCategories} />
        <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen">
          <div className="hidden md:block md:row-span-2 md:col-span-3">
            <CategoryDesktop postCategories={postCategories} />
          </div>
          <div className="hidden md:block md:col-span-9">
            <SortBar />
          </div>
          <div className="md:col-span-9 grid grid-cols-6 gap-8">
            <PostList blogsData={blogsData.docs} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { data: result } = await http.get('/posts?limit=6&page=1', {
    headers: {
      Cookie: req.headers.cookie || '',
    },
  });
  const { data: postCategories } = await http.get('/post-category');
  const { data } = result;

  return {
    props: {
      blogsData: data,
      postCategories: postCategories.data,
    },
  };
}
