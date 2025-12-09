import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="prose prose-teal">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Angaben gemäß § 5 TMG</h2>
            <p className="text-gray-600">
              Musterfirma GmbH<br />
              Musterstraße 1<br />
              12345 Musterstadt
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Vertreten durch</h2>
            <p className="text-gray-600">
              Max Mustermann (Geschäftsführer)
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Kontakt</h2>
            <p className="text-gray-600">
              Telefon: +49 (0) 123 44 55 66<br />
              E-Mail: kontakt@kindergarten-stellenangebote.de
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Registereintrag</h2>
            <p className="text-gray-600">
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Musterstadt<br />
              Registernummer: HRB 12345
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Umsatzsteuer-ID</h2>
            <p className="text-gray-600">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 123 456 789
            </p>
          </section>

          <section className="border-t pt-8">
            <h3 className="text-lg font-semibold mb-2">Haftung für Inhalte</h3>
            <p className="text-sm text-gray-500 mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
