import dynamic from "next/dynamic";

const MapsApp = dynamic(() => import("@/components/MapsApp"), {
  ssr: false,
});

const Home = () => {
  return (
    <main className="w-full h-full">
      <MapsApp />
    </main>
  );
};

export default Home;
