import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[url('/img/jettWall.jpg')] bg-center bg-cover opacity-20 w-full"/>
          <main className='p-4'>
          
          </main>
      </div>
      <Footer/>
    </>
  );
}

export default App;