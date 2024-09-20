# Currency Converter

A React-based currency conversion tool that provides real-time currency conversion, similar to Google's currency converter.

## Setup Instructions

1. **Install dependencies**

   ```
   npm install
   ```

2. **Set up environment variables**

   - Create a `.env` file in the root directory
   - Add the following environment variables:
     ```
     VITE_CURRENCY_API_KEY=your_api_key_here
     VITE_CURRENCY_API_BASE_URL=https://api.currencybeacon.com/v1
     ```
   - Replace `your_api_key_here` with your actual CurrencyBeacon API key

3. **Start the development server**

   ```
   npm run dev
   ```

4. **Open the application**
   - Navigate to `http://localhost:5173` in your web browser

## Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm run lint`: Runs the linter
- `npm run format`: Formats the code using Prettier
- `npm run format:check`: Checks if the code is formatted correctly

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- CurrencyBeacon API

## Development Notes

I picked Vite for fast builds, Tailwind CSS for quick styling, and made custom hooks to keep the API stuff organized - seemed like the quickest way to get a working currency converter up and running.
