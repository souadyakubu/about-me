import dedent from 'dedent';
export const projects = [
    {
        id: 'whats-cookin',
        title: "What's 🍪'n?",
        description: "Cooking app with recipe viewing, ingredient suggestions, and interactive cooking simulation features.",
        github: "https://github.com/souadyakubu/cookie",
        website: "https://cooking-3d97a.web.app/",
        details: `
  ### Project Overview: What's 🍪'n?
  
  This project is a cooking application built using React and Firebase, featuring three interconnected modules designed to enhance the home cooking experience. Rather than simply displaying basic recipes, this application provides an interactive platform where users can explore recipes by category or region, get AI-powered ingredient suggestions, and engage in interactive cooking simulations.
  
  ---
  
  #### Core Features
  
  **1. Recipe Viewing**
  - Browse featured recipes using the TheMealDB API
  - Filter recipes by categories (e.g., beef dishes, vegan dishes, breakfast)
  - Explore recipes by country of origin
  - Search for specific recipes with an intuitive search interface
  - Save favorite meals to a personal collection
  - View detailed recipe information including ingredients, measurements, instructions, and even video tutorials
  
  **2. Ingredient Suggestions**
  - Leverages OpenAI to generate recipe ideas based on available ingredients
  - Tag-based ingredient selection system with animations
  - AI-generated recipe suggestions with detailed instructions formatted in Markdown
  
  **3. Cooking Simulation**
  - Game-like interface for step-by-step cooking guidance
  - Interactive drag-and-drop functionality (React DnD)
  - Timer-based cooking challenges
  - Score tracking based on preparation accuracy and speed
  
  ---
  
  #### Technical Implementation
  
  - React (functional components, hooks)
  - Firebase (authentication, user data)
  - Chakra UI (component styling)
  - Framer Motion (animations)
  - React Router DOM (navigation)
  - Axios (API calls)
  - React DnD (drag-and-drop)
  - OpenAI API (recipe suggestions)
  - ReactMarkdown (rendering content)
  - Responsive design, interactive UX
  
  ---
      `
    },
    {
        id: 'accessible-voice-assistant',
        title: "Accessible Voice Assistant",
        description: "AI-powered voice assistant designed to aid visually impaired users with voice-based navigation, task management, and information access.",
        github: "https://github.com/souadyakubu/voice-assistant",
        website: "",
        details: dedent(`
          ### Project Overview: Accessible Voice Assistant
    
          Developed out of a desire to support individuals like my uncle who lost his vision, this AI-powered voice assistant is designed to help visually impaired users. The project was first developed during a 24-hour hackathon, where it won the **Most Creative Project** award.
    
          ---
    
          #### Core Features
    
          **1. Voice-First Interaction**
          - Speech-to-text functionality using Google Speech Recognition API
          - Natural language understanding via OpenAI GPT-3.5
          - Text-to-speech feedback using Coqui TTS, offering realistic voice cloning and multilingual support
    
          **2. Task Execution**
          - Weather updates via real-time API integration
          - Web search capabilities using Python's \`webbrowser\` module
          - Email access and basic management through voice commands
    
          **3. Accessible Design**
          - Fully voice-navigated, with fallback GUI developed in Tkinter
          - GUI displays real-time transcriptions of user commands and assistant responses
          
          ---
    
          #### Technical Implementation
    
          - **Python** (core language)
          - **Google Speech Recognition API** (speech-to-text)
          - **OpenAI GPT-3.5** (natural language processing and response generation)
          - **Coqui TTS** (advanced text-to-speech with voice cloning)
          - **Tkinter** (Python-based GUI)
          - **Weather API** (real-time weather data)
          - **Python webbrowser module** (web search functionality)
          - Modular architecture with command parsing and intent recognition for extensibility
    
          ---
        `)
    },

    {
        id: 'bartering-app',
        title: "Bartering App",
        description: "Platform for item-for-item exchanges without monetary transactions.",
        github: "",
        website: "",
        details: dedent(`
          ### Project Overview: Bartering App
      
          Inspired by the idea of a cashless community marketplace, the Bartering App is a mobile-first platform where users can exchange goods directly without the need for money. Whether it’s trading a book for a kitchen appliance or swapping clothes, the app creates a modern, user-friendly way to facilitate item-for-item trades with transparency and trust.
      
          ---
          
          #### Core Features
      
          **1. Item Listings**
          - Users can upload items with images, descriptions, and desired trade criteria
          - Dynamic filtering by category, condition, and location
          - Item cards styled like dating apps to quickly browse and express interest
      
          **2. Profile & Inventory Management**
          - Personalized user profiles showcasing items available for trade
          - Inventory system for managing posted, accepted, and completed trades
          - User history and reputation ratings to ensure trusted interactions
      
          **3. Negotiation & Matching System**
          - Swipe-to-match interface for showing mutual interest in items
          - In-app messaging system with trade offer and counteroffer features
          - Notifications for accepted trades, new messages, and item status updates
      
          **4. Security & Verification**
          - Email authentication with multi-factor verification
          - Backend trade logging and moderation tools to prevent fraud
          - Admin panel for dispute resolution and flagged content review
      
          ---
          
          #### Technical Implementation
      
          - **React Native** (mobile front end)
          - **Azure Functions** (serverless backend architecture)
          - **Azure Cosmos DB** (NoSQL database for user and item data)
          - **Firebase Cloud Messaging** (real-time push notifications)
          - **Expo** (streamlined app deployment and testing)
          - **Node.js** + **Express** (API logic, item matching engine)
          - **JWT Authentication** (secure user login and session handling)
          - **Cloudinary** (image upload and optimization)
          - Responsive design and smooth UX for mobile-first interactions
      
          ---
      
          This project brings together mobile development, cloud computing, and secure transaction flows to create an innovative take on peer-to-peer bartering, emphasizing usability, trust, and community-driven exchange.
        `)
    }
    ,
    {
        id: 'readers-tool',
        title: "Readers Tool",
        description: "AI-powered tool enhancing the reading experience of archaic texts.",
        github: "https://github.com/souadyakubu/senior-project",
        website: "",
        details: dedent(`
          ### Project Overview: Readers Tool
      
          This project is an AI-powered reading companion designed to help users deeply engage with classic literature—especially texts with archaic language and complex theology. Created in partnership with CCEL.org, this tool augments the reading experience with intelligent features like real-time explanations, text modernization, and quizzes, allowing readers to move beyond passive consumption to active understanding.
      
          ---
          
          #### Core Features
      
          **1. Reading & Exploration**
          - Browse classic Christian books from the CCEL.org digital library
          - Chapter-based navigation and inline text rendering
          - Real-time content fetching and formatting with custom CCEL parser
          - Responsive layout for desktop and mobile
      
          **2. AI-Powered Comprehension**
          - **Explain**: Get simplified, real-time explanations of complex or archaic theological passages
          - **Modernize**: Translate ancient or outdated language into modern English while preserving meaning
          - **Contextual Insight**: AI-generated historical and cultural context for key sections
          - **Quiz Generator**: Auto-generates reading comprehension questions to reinforce learning, with scoring and feedback
      
          **3. Accessibility & UX Enhancements**
          - Minimalist and distraction-free reading interface
          - Chapter photos for easier navigation
          - Tailored UI for both new and experienced readers
          - All features optional—users control how much AI aid they want
      
          ---
          
          #### Technical Implementation
      
          - **Frontend**: React.js, Tailwind CSS, React Router
          - **Backend/Hosting**: Firebase (Authentication, Hosting)
          - **AI Integration**: Claude AI for explanation, modernization, and quizzes
          - **Custom Parsing**: CCEL.org integration with custom HTML parser and formatting logic
          - **Prompt Engineering**: Fine-tuned prompts for theological clarity, brevity, and accuracy
          - Agile development methodology with weekly advisor check-ins and iterative testing
      
          ---
          
          #### Design Focus
      
          - **Cultural Appropriateness**: Preserves integrity of Christian texts while offering comprehension aids
          - **Aesthetic Design**: Clean interface with accessible navigation, large readable fonts, and high contrast
          - **Trust**: Heavy emphasis on prompt reliability and transparency of AI-generated content
      
          ---
          
          #### Testing & Feedback
      
          - User testing with observation + surveys to measure usability and clarity
          - Tasks included: navigation, highlighting passages, using explain/modernize, and taking a quiz
          - Iterative refinements based on user feedback (e.g., quiz answer logic, visual cues for book/chapter navigation)
      
          ---
        `)
    }
    ,

    {
        id: 'budget-app',
        title: "Budget App",
        description: "Full-stack budgeting application using React and Node.js with API integration.",
        github: "",
        website: "",
        details: dedent(`
            ### Project Overview: Budget App
          
            The Budget App is a full-stack financial management tool designed to help users track their expenses, set savings goals, and gain insights into their spending habits. It provides an intuitive interface for logging transactions, generating budget reports, and forecasting future expenses. This project was inspired by the need for a lightweight yet powerful budgeting tool that combines automation with transparency.
          
            ---
          
            #### Core Features
          
            **1. Expense Tracking**
            - Add, categorize, and tag transactions (e.g., groceries, transportation, entertainment)
            - Visual breakdown of spending by category and time range
            - Daily, weekly, and monthly tracking with real-time updates
          
            **2. Budget Planning**
            - Set monthly or custom budget goals
            - Receive alerts when nearing budget thresholds
            - View budget vs. actual spending dashboards
          
            **3. Data & API Integration**
            - Fetch live currency exchange rates via a currency conversion API
            - Import transactions from CSV or simulated bank feeds
            - Secure login and session handling
          
            **4. Analytics & Insights**
            - Pie and bar charts for spending distribution
            - Forecast future expenses based on historical trends
            - Savings tracker to monitor financial goals
          
            ---
          
            #### Technical Implementation
          
            - Languages Used JavaScript (ES6+)
            - Frontend React (hooks, context API), Chart.js for data visualization
            - Backend Node.js, Express.js for API endpoints
            - Database MongoDB (Mongoose models for users and transactions)
            - Authentication JWT-based login system
            - Currency API Real-time exchange rates for global users
            - Styling Tailwind CSS and custom components
            - Deployment Render (backend), Netlify (frontend)
          
            ---
          `)

    },
    {
        id: 'rfid-door-lock',
        title: "RFID Door Lock",
        description: "Arduino-based RFID door lock prototype exploring hardware-software integration.",
        github: "",
        website: "",
        details: dedent(`
            ### Project Overview: RFID Door Lock
          
            This project explores secure access control using RFID technology and Arduino microcontrollers. The system is designed as a low-cost prototype for home or office door security, allowing access only to registered RFID cards. The project highlights practical IoT concepts and real-time embedded system communication.
          
            ---
          
            #### Core Features
          
            **1. Secure Access Control**
            - Unlocks door when a valid RFID card is scanned
            - Logs successful and failed access attempts
            - Allows adding or removing authorized cards via a master key setup
          
            **2. Visual and Audio Feedback**
            - LCD display for access status messages (e.g., "Access Granted", "Invalid Card")
            - Buzzer and LED indicators for status confirmation
            - Optional keypad entry for manual override
          
            **3. Real-Time Monitoring**
            - Serial communication with a connected computer for debugging
            - Timestamped access logs via serial output or SD card module
          
            ---
          
            #### Technical Implementation
          
            - Hardware Arduino Uno, RC522 RFID reader, servo motor, buzzer, LEDs, 16x2 LCD
            - Software Arduino IDE with C++ code
            - Libraries Used MFRC522 (RFID), Servo, LiquidCrystal
            - Power Supply External battery or USB connection
            - Security Design Master card authentication to prevent unauthorized access
            - Scalability Designed to scale into a networked system with future cloud logging capabilities
          
            ---
          `)

    },
];

