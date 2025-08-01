import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostList from '@/components/PostList';


export default async function IndexPage() {
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <Header></Header>
      <PostList></PostList>
      <Footer></Footer>
    </main>
  );
}
