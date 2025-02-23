"use client"
import { useState } from 'react';
import axios from 'axios';
import { apiClient } from '@/config/apiClient';

export default function CreatePost() {
  // Состояния для хранения данных формы
  const [header, setHeader] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    setLoading(true);
    setError('');

    try {
      // Отправляем данные на сервер (NestJS бэкенд)
      const response = await apiClient.post('/post', {
        header,
        body,
      });

      // Обработка успешного ответа
      console.log('Пост создан:', response.data);
      alert('Пост успешно создан!');
    } catch (err) {
      // Обработка ошибок
      setError('Ошибка при создании поста');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-4/5 mx-auto mt-2 text-2xl">
      <h1>Создайте пост</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Заголовок
          </label>
          <input
            type="text"
            id="title"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Содержание
          </label>
          <textarea
            id="content"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {loading ? 'Отправка...' : 'Создать пост'}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}