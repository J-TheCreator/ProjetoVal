import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="relative w-screen h-screen">
        <div
          className="absolute inset-0 bg-[url('/img/jettWall.jpg')] bg-center bg-cover opacity-10"
        />
        <div className="relative z-10">
          <main className='p-4'>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;