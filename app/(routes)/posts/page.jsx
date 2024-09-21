
import GlobalApi from '@/app/_utils/GlobalApi';
import DisplayData from '@/app/_components/DisplayData';

export default async function pagePost () {
  
  const posts = await GlobalApi.getPosts();

  return (
    <div>   
        <DisplayData  data={posts} />
    </div>
  )
}