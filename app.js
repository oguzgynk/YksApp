const { useState, useEffect } = React;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState({ type: 'all', subject: 'all' });
  const [searchTerm, setSearchTerm] = useState('');
  const [bookForm, setBookForm] = useState({
    name: '',
    author: '',
    publisher: '',
    type: '',
    subject: '',
    topics: []
  });
  const [editingBook, setEditingBook] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  // PWA Install prompt
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.
// app.js içeriği buraya eklenecek (React bileşenleri)
