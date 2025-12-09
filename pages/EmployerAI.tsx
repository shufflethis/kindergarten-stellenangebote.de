import React, { useState } from 'react';
import { generateJobDescription } from '../services/geminiService';
import { Sparkles, Copy, CheckCircle } from 'lucide-react';

const EmployerAI: React.FC = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    facilityName: '',
    city: '',
    benefits: ''
  });
  const [generatedText, setGeneratedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setGeneratedText('');

    try {
      const text = await generateJobDescription(formData);
      setGeneratedText(text);
    } catch (err) {
      setError("Fehler beim Generieren. Bitte überprüfen Sie den API Key oder versuchen Sie es später.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (generatedText) {
      navigator.clipboard.writeText(generatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-full mb-4">
            <Sparkles className="h-8 w-8 text-teal-600" />
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">KI-Stellenanzeigen-Generator</h1>
          <p className="mt-4 text-lg text-gray-500">
            Erstellen Sie in Sekunden professionelle Stellenbeschreibungen für Ihre Kita mit der Kraft von Gemini AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Details eingeben</h2>
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Stellentitel</label>
                <input
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  required
                  placeholder="z.B. Erzieher (m/w/d)"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="facilityName" className="block text-sm font-medium text-gray-700">Name der Einrichtung</label>
                <input
                  type="text"
                  name="facilityName"
                  id="facilityName"
                  required
                  placeholder="z.B. Kita Regenbogen"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  value={formData.facilityName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Stadt / Ort</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  required
                  placeholder="z.B. München"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="benefits" className="block text-sm font-medium text-gray-700">Besondere Vorteile (Stichpunkte)</label>
                <textarea
                  name="benefits"
                  id="benefits"
                  rows={4}
                  required
                  placeholder="z.B. Jobrad, TVöD Bezahlung, Fortbildungen, tolles Team"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  value={formData.benefits}
                  onChange={handleInputChange}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'}`}
                >
                  {loading ? 'Generiere...' : 'Stellenanzeige erstellen'}
                </button>
              </div>
              
              {error && (
                <div className="text-red-600 text-sm mt-2 p-2 bg-red-50 rounded">
                  {error}
                </div>
              )}
            </form>
          </div>

          {/* Output Area */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Vorschau</h2>
              {generatedText && (
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                      Kopiert
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-1" />
                      Kopieren
                    </>
                  )}
                </button>
              )}
            </div>
            
            <div className="flex-1 bg-gray-50 rounded-md p-4 overflow-y-auto min-h-[400px] text-sm whitespace-pre-wrap text-gray-700 border border-gray-200">
              {generatedText ? generatedText : (
                <div className="h-full flex items-center justify-center text-gray-400 italic">
                  Hier erscheint Ihr KI-generierter Text...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerAI;
