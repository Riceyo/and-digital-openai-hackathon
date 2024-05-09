import { useState } from 'react';

function UserInputCard({ onDataChange, onSubmit }) {
    const [expenditure, setExpenditure] = useState('');
    const [cpi, setCPI] = useState('');

    const handleInputChange = (field, value) => {
        if (field === 'expenditure') {
            setExpenditure(value);
        } else if (field === 'cpi') {
            setCPI(value);
        }
        onDataChange({ [field]: value });
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      if (expenditure && cpi) {
          onSubmit();
      } else {
          alert('Please fill in all fields.');
      }
  }

    return (
        <div className="bg-white rounded p-6 w-full shadow-lg">
        <div className="flex flex-row justify-around mb-4">

            <div className="mr-4">
                <label htmlFor="cpi" className="block text-gray-700 mb-2">Forecast CPI:</label>
                <input
                  type="number"
                  id="cpi"
                  placeholder=""
                  value={cpi}
                  onChange={e => handleInputChange('cpi', e.target.value)}
                  className="w-full p-2 border rounded"
                />
            </div>

            <div>
                <label htmlFor="income" className="block text-gray-700 mb-2">Weekly Expenditure:</label>
                <input
                  type="number"
                  id="expenditure"
                  placeholder=""
                  value={expenditure}
                  onChange={e => handleInputChange('expenditure', e.target.value)}
                  className="w-full p-2 border rounded"
                  
                />
            </div>

        </div>

        <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto mt-10"
            >
              Submit
            </button>
        </div>
      </div>
    );
}

export default UserInputCard;
