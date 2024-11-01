import Link from "next/link";

export default function Home() {
  return (
   
      <main className="bg-orange-10 px-20">
       <h2 className="text-pink-400 pt-5 pl-10">Dashboard</h2>
       <p className="p-10 pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quis reiciendis cum adipisci totam perspiciatis fugit quo, ducimus recusandae hic obcaecati provident in consectetur magni, molestias vero qui? Repudiandae, quo.</p>
       <div className="flex justify-center">
        <button className="border bg-pink-100 rounded-md p-2 hover:bg-yellow-50 font-medium hover:text-pink-400">
          <Link href="/tickets">View Tickets
          </Link>
          </button>
       </div>
       <h4 className="text-pink-400 pt-5 pl-10">Company Update</h4>
       <div className="border p-3 pt-5 m-5 rounded-md">
        <h2 className="text-base text-yellow-900 font-medium">New menber of the web dev</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolore laboriosam at consequatur iusto sed ducimus maiores a ab mollitia et, neque dolorem quis voluptatum iste non recusandae nesciunt possimus.</p>
       </div>
       <div className="border p-3 pt-5 m-5 rounded-md">
        <h2 className="text-base text-yellow-900 font-medium">New website live!</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolore laboriosam at consequatur iusto sed ducimus maiores a ab mollitia et, neque dolorem quis voluptatum iste non recusandae nesciunt possimus.</p>
       </div>
       <h4 className="text-pink-400 pt-5 pl-10">News</h4>
       <div className="border p-3 pt-5 m-5 rounded-md">
        <h2 className="text-md text-yellow-900 font-medium">New menber of the web dev</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolore laboriosam at consequatur iusto sed ducimus maiores a ab mollitia et, neque dolorem quis voluptatum iste non recusandae nesciunt possimus.</p>
       </div>
      </main>
    
   
  );
}
