
import React, { useState } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import IDENEngine from './pages/IDENEngine';
import MindShift from './pages/MindShift';
import Blog from './pages/Blog';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.HOME);

  const handlePageChange = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case Page.HOME:
        return <Home onPageChange={handlePageChange} />;
      case Page.IDEN_ENGINE:
        return <IDENEngine />;
      case Page.MINDSHIFT:
        return <MindShift />;
      case Page.BLOG:
        return <Blog />;
      default:
        return <Home onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-500/30">
      <Navbar activePage={activePage} onPageChange={handlePageChange} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
