import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './utils/store/store';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
