* {

    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    direction: rtl;
    color: #333;
    overflow-x: hidden;
}

/* Navigation */
.navbar {
    background-color: #fff;
    padding: 1rem 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu-toggle {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.menu-toggle span {
    width: 25px;
    height: 3px;
    background-color: #333;
    border-radius: 2px;
    transition: all 0.3s ease;
}

.nav-header h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
}

.subtitle {
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.2rem;
}

/* Side Menu */
.side-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 300px;
    height: 100vh;
    background-color: #f5f5f0;
    box-shadow: -2px 0 10px rgba(0,0,0,0.1);
    transition: right 0.3s ease;
    z-index: 200;
    padding: 2rem;
}

.side-menu.active {
    right: 0;
}

.close-btn {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 2rem;
    cursor: pointer;
    color: #333;
}

.menu-header {
    margin-bottom: 3rem;
    margin-top: 3rem;
}

.menu-header h2 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #333;
}

.menu-header p {
    font-size: 1rem;
    color: #666;
    margin-top: 0.3rem;
}

.menu-items {
    list-style: none;
}

.menu-items li {
    margin-bottom: 1.5rem;
}

.menu-items a {
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

.menu-items a:hover {
    color: #6b9080;
}

/* Hero Section */
.hero {
    padding: 8rem 2rem 4rem;
    background-color: #f5f5f0;
    text-align: center;
}

.hero-content {
    max-width: 700px;
    margin: 0 auto;
}

.hero h1 {
    color: #6b9080;
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
}

.main-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2d2d2d;
    margin-bottom: 2rem;
    line-height: 1.3;
}

.hero-description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 2.5rem;
}

.cta-button {
    display: inline-block;
    padding: 1rem 3rem;
    background-color: transparent;
    border: 2px solid #6b9080;
    color: #6b9080;
    text-decoration: none;
    border-radius: 50px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.cta-button:hover {
    background-color: #6b9080;
    color: white;
}

/* Guiding Principles Section */
.guiding-principles {
    padding: 4rem 2rem;
    background-color: #fff;
}

.principles-container {
    max-width: 700px;
    margin: 0 auto;
}

.section-subtitle {
    color: #6b9080;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 0.5rem;
}

.section-title {
    font-size: 2rem;
    font-weight: 700;
    color: #2d2d2d;
    text-align: center;
    margin-bottom: 3rem;
}

.principle {
    text-align: center;
    margin-bottom: 3rem;
}

.icon-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #d4e4dd;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
}

.icon {
    width: 35px;
    height: 35px;
    color: #6b9080;
}

.principle h4 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2d2d2d;
    margin-bottom: 1rem;
}

.principle p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
}

/* First Chat Section */
.first-chat {
    padding: 4rem 2rem;
    background-color: #6b9080;
    text-align: center;
}

.chat-content {
    max-width: 700px;
    margin: 0 auto;
}

.chat-title {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.5rem;
}

.chat-description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: white;
    margin-bottom: 2rem;
}

.cta-button-light {
    display: inline-block;
    padding: 1rem 3rem;
    background-color: #f5f5f0;
    color: #6b9080;
    text-decoration: none;
    border-radius: 50px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.cta-button-light:hover {
    background-color: white;
}

/* Safe Space Section */
.safe-space {
    padding: 0;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23f5f5f0" width="1200" height="800"/></svg>');
    background-size: cover;
    background-position: center;
    min-height: 600px;
    display: flex;
    align-items: center;
}

.space-container {
    width: 100%;
    padding: 4rem 2rem;
}

.space-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.space-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: #2d2d2d;
    margin-bottom: 2rem;
    line-height: 1.4;
}

.space-title span {
    color: #6b9080;
}

.space-description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 1.5rem;
}

.space-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2.5rem;
    align-items: center;
}

.cta-button-primary {
    display: inline-block;
    padding: 1rem 2.5rem;
    background-color: #6b9080;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.cta-button-primary:hover {
    background-color: #5a7a6a;
}

.cta-button-secondary {
    display: inline-block;
    padding: 1rem 2.5rem;
    background-color: transparent;
    border: 2px solid #6b9080;
    color: #6b9080;
    text-decoration: none;
    border-radius: 50px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.cta-button-secondary:hover {
    background-color: #6b9080;
    color: white;
}

/* Treatment Areas Section */
.treatment-areas {
    padding: 4rem 2rem;
    background-color: #f5f5f0;
}

.areas-container {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}

.areas-subtitle {
    color: #6b9080;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.areas-title {
    font-size: 2rem;
    font-weight: 700;
    color: #2d2d2d;
    margin-bottom: 1rem;
}

.areas-description {
    font-size: 1rem;
    color: #555;
    margin-bottom: 2.5rem;
}

.areas-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 2.5rem;
}

.area-card {
    padding: 1.2rem 1.5rem;
    background-color: #d4e4dd;
    border-radius: 50px;
    font-size: 1rem;
    color: #2d2d2d;
    transition: all 0.3s ease;
}

.area-card:hover {
    background-color: #6b9080;
    color: white;
}

.areas-grid .area-card:last-child {
    grid-column: 1 / -1;
    max-width: 300px;
    margin: 0 auto;
    width: 100%;
}

.cta-link {
    display: inline-block;
    padding: 1rem 3rem;
    background-color: #6b9080;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.cta-link:hover {
    background-color: #5a7a6a;
}

/* WhatsApp Button */
.whatsapp-button {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    width: 60px;
    height: 60px;
    background-color: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    z-index: 150;
    transition: all 0.3s ease;
}

.whatsapp-button:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0,0,0,0.4);
}

.whatsapp-button svg {
    width: 35px;
    height: 35px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .main-title {
        font-size: 2rem;
    }
    
    .section-title, .chat-title, .space-title {
        font-size: 1.5rem;
    }
    
    .areas-grid {
        grid-template-columns: 1fr;
    }
    
    .space-buttons {
        width: 100%;
    }
    
    .cta-button-primary,
    .cta-button-secondary {
        width: 100%;
        max-width: 400px;
    }
}

@media (max-width: 480px) {
    .hero {
        padding: 6rem 1rem 3rem;
    }
    
    .main-title {
        font-size: 1.8rem;
    }
    
    .hero-description {
        font-size: 1rem;
    }
}
