# Free Fire Tournament Platform

Welcome to the Free Fire Tournament Platform! This web application allows players to register as teams, participate in tournaments, and compete for exciting prize money. The platform is designed to provide a seamless experience for organizing and joining Free Fire competitions.

## Features

- **Team Registration**: Players can create a team, choose a team name, and register their squad members.
- **Player Profiles**: Each player can provide details such as their Free Fire ID and mobile number.
- **Tournaments and Matches**: Teams can join available tournaments, view match schedules, and track progress.
- **Payment Integration**: Secure payment options for tournament registration using UPI (PhonePe, Google Pay, etc.).
- **Prize Money**: Winners receive prize money based on the tournament structure.

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js
- MongoDB
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-link>
   ```

2. Navigate to the project directory:

   ```bash
   cd FREEFIRE
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up the environment variables (e.g., MongoDB connection string, payment gateway details) in a `.env` file.

5. Start the server:

   ```bash
   cd server
   node index.js
   ```

6. Open the application in your browser:

   ```
   http://localhost:5001
   ```

### Usage

- **Create a Team**: Go to the registration page, enter team details, and add players.
- **Join a Tournament**: Browse upcoming tournaments and join with your registered team.
- **Payment**: Complete the registration by making a payment through the integrated UPI gateway.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript (React/Next.js)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Integration**: UPI via PhonePe, Google Pay, etc.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any queries or support, feel free to reach out at [poladharmat887@gmail.com](mailto:poladharmat887@gmail.com).
