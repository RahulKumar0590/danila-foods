# DANILA FOODS - Company Website

An introductory website for DANILA FOODS, founded in September 2023. This is a static website showcasing the company's vision, founders, and bakery ingredients products.

## 🌐 Website Sections

1. **Home** - Welcome message and company introduction
2. **About Us** - Detailed information about the three founders and company vision
3. **Products** - Complete range of Bakery Ingredients

## 🚀 Tech Stack

This is a **static website** (no backend or database):
- **HTML5** - Structure
- **CSS3** - Styling with modern features (Grid, Flexbox, Animations)
- **Vanilla JavaScript** - Interactivity and smooth scrolling
- **Google Fonts** - Poppins font family

## 📂 Project Structure

```
DANILAFOODS/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styling
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Image assets (to be added)
│   ├── bread-improver.jpg
│   ├── cake-gel.jpg
│   ├── bakery-mixes.jpg
│   ├── bread-softener.jpg
│   ├── dough-conditioner.jpg
│   └── bakery-flavors.jpg
└── README.md           # This file
```

## 🎨 Features

✅ **Fully Responsive** - Works on desktop, tablet, and mobile  
✅ **Smooth Animations** - Scroll-triggered animations  
✅ **Modern Design** - Clean, professional layout  
✅ **Fast Loading** - No database queries, pure static content  
✅ **Easy to Update** - Simple HTML/CSS/JS structure  

## 🛠️ Setup Instructions

### Option 1: Direct Browser Access
1. Simply open `index.html` in any modern web browser
2. No installation or server required!

### Option 2: Local Server (Recommended for Development)

Using Python:
```powershell
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

Using Node.js:
```powershell
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Visit: http://localhost:8080
```

Using VS Code:
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

## 📸 Adding Images

Place product images in the `images/` folder:
- `bread-improver.jpg` (800x800px recommended)
- `cake-gel.jpg`
- `bakery-mixes.jpg`
- `bread-softener.jpg`
- `dough-conditioner.jpg`
- `bakery-flavors.jpg`

You can use placeholder images or actual product photos.

## 🎨 Customization

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #e74c3c;      /* Main brand color */
    --secondary-color: #2c3e50;    /* Secondary color */
    --accent-color: #f39c12;       /* Accent highlights */
}
```

### Update Content
- **Company info**: Edit `index.html`
- **Founder details**: Modify the About Us section
- **Products**: Update product names and descriptions

### Add Contact Information
Update the footer section in `index.html` with:
- Email address
- Phone number
- Physical address
- Social media links

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔮 Future Enhancements (Optional)

If you want to expand beyond a static site:
- Add contact form with email integration
- Implement product inquiry system
- Add blog/news section
- Include customer testimonials
- Add image gallery
- Multi-language support
- Analytics integration (Google Analytics)

## 📄 License

© 2026 DANILA FOODS. All Rights Reserved  
Founded December 2024

---

**Built with care for DANILA FOODS**  
*A simple, elegant introduction to a promising new venture*

## 🚀 Tech Stack

### Frontend
- **React.js** - UI Library
- **React Router** - Navigation
- **Axios** - HTTP Client
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **MSSQL** - SQL Server Driver
- **Nodemailer** - Email Service

### Database
- **SQL Server** - Database
- **Tables**: `dbo.person`, `dbo.contact_submissions`

---

## 📁 Project Structure

```
DANILAFOODS/
├── backend/
│   ├── controllers/
│   │   ├── personController.js
│   │   └── contactController.js
│   ├── routes/
│   │   ├── personRoutes.js
│   │   └── contactRoutes.js
│   ├── database/
│   │   └── schema.sql
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   ├── pages/
│   │   │   ├── Home.js / Home.css
│   │   │   ├── OurStory.js / OurStory.css
│   │   │   ├── Products.js / Products.css
│   │   │   ├── Presence.js / Presence.css
│   │   │   └── Contact.js / Contact.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **SQL Server** (2019 or higher) or **Azure SQL Database**
- **npm** or **yarn**

### 1. Database Setup

Open SQL Server Management Studio and run the database schema:

```bash
# Navigate to backend database folder
cd backend/database

# Execute schema.sql in SQL Server Management Studio
# This creates the database, tables, and sample data
```

### 2. Backend Setup

```powershell
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file from example
copy .env.example .env

# Edit .env with your database credentials
# Update: DB_SERVER, DB_NAME, DB_USER, DB_PASSWORD

# Start the backend server
npm run dev
```

Backend will run on: **http://localhost:5000**

### 3. Frontend Setup

```powershell
# Open a new terminal
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the React development server
npm start
```

Frontend will run on: **http://localhost:3000**

---

## 🔧 Configuration

### Backend Environment Variables (`.env`)

```env
PORT=5000
NODE_ENV=development

# Database Configuration
DB_SERVER=localhost
DB_NAME=DanilaFoodsDB
DB_USER=sa
DB_PASSWORD=YourPassword123

# Email Configuration (optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-email-password
EMAIL_FROM=noreply@danilafoods.in
```

---

## 📡 API Endpoints

### Person Routes
- `GET /api/persons` - Get all persons
- `GET /api/persons/:id` - Get person by ID
- `GET /api/persons/search/:name` - Search persons by name
- `POST /api/persons` - Create new person
- `PUT /api/persons/:id` - Update person
- `DELETE /api/persons/:id` - Delete person

### Contact Routes
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions

### Health Check
- `GET /api/health` - API health check

---

## 🎯 How It Works (Request Flow)

### Example: Contact Form Submission

1. **User fills contact form** in React (Contact.js)
2. **Frontend sends POST request** via Axios:
   ```javascript
   axios.post('/api/contact', formData)
   ```
3. **Express backend receives** request at `/api/contact` route
4. **contactController** processes the data
5. **SQL query executes** to insert into `dbo.contact_submissions`
6. **Email sent** via Nodemailer (optional)
7. **Response sent back** to React frontend
8. **UI updated** with success/error message

### Example: Display Persons Data

```
React Component → Axios GET → Express Route → Controller 
→ SQL Query (SELECT * FROM dbo.person) → Response 
→ React State Update → UI Render
```

---

## 🗄️ Database Schema

### `dbo.person` Table
```sql
- id (INT, Primary Key, Auto-increment)
- name (NVARCHAR(100))
- email (NVARCHAR(100), Unique)
- phone (NVARCHAR(20))
- address (NVARCHAR(255))
- created_at (DATETIME2)
- updated_at (DATETIME2)
```

### `dbo.contact_submissions` Table
```sql
- id (INT, Primary Key, Auto-increment)
- name (NVARCHAR(100))
- email (NVARCHAR(100))
- phone (NVARCHAR(20))
- message (NTEXT)
- submitted_at (DATETIME2)
- status (NVARCHAR(20), Default: 'new')
```

---

## 🚀 Deployment

### Frontend (React)
- Build: `npm run build`
- Deploy to: **Netlify**, **Vercel**, **Azure Static Web Apps**

### Backend (Node.js/Express)
- Deploy to: **Heroku**, **Azure App Service**, **AWS EC2**

### Database
- Use **Azure SQL Database** for cloud deployment
- Update connection string in `.env`

---

## 🛠️ Development Commands

### Backend
```powershell
npm start          # Start production server
npm run dev        # Start development server with nodemon
```

### Frontend
```powershell
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
```

---

## 📝 Key Features

✅ **Responsive Design** - Works on all devices  
✅ **REST API** - Clean RESTful architecture  
✅ **Form Validation** - Both frontend and backend  
✅ **Error Handling** - Comprehensive error messages  
✅ **SQL Injection Protection** - Parameterized queries  
✅ **CORS Enabled** - Cross-origin requests allowed  
✅ **Email Notifications** - Contact form submissions  

---

## 🔐 Security Best Practices

- ✅ Environment variables for sensitive data
- ✅ Parameterized SQL queries (prevents SQL injection)
- ✅ CORS configuration
- ✅ Input validation on both client and server
- ✅ HTTPS recommended for production

---

## 📚 Next Steps

1. Add authentication (JWT tokens)
2. Add admin dashboard
3. Implement file upload for product images
4. Add search and filtering
5. Add pagination for large datasets
6. Implement caching (Redis)
7. Add logging (Winston)
8. Write unit tests (Jest)

---

## 🐛 Troubleshooting

### Database Connection Failed
- Check SQL Server is running
- Verify credentials in `.env`
- Ensure database exists
- Check firewall settings

### Cannot Connect to Backend
- Ensure backend is running on port 5000
- Check `proxy` setting in `frontend/package.json`

### CORS Errors
- Backend must run on different port than frontend
- CORS middleware is configured in `server.js`

---

## 📧 Support

For issues or questions, contact: **info@danilafoods.in**

---

## 📄 License

© 2025 DANILA FOODS. All Rights Reserved

---

**Built with ❤️ using React, Node.js, Express, and SQL Server**
