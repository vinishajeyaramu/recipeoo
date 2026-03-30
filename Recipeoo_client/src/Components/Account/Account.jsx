import React, { useState, useEffect, useRef } from 'react';
import './Account.css';
import { useNavigate } from 'react-router-dom';
import Pageheader from '../../Resuable Components/Page Header/Pageheader';
import PopularTags from '../../Resuable Components/Populartags/Populatags';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { getAdminAppUrl, getApiUrl } from '../../config/api';

const pageProps = {
  title: "My Account",
 
};

const tagData = [
  { name: 'COMFORT FOOD', link: '/tags/comfort-food' },
  { name: 'DAIRY-FREE', link: '/tags/dairy-free' },
  { name: 'DESSERTS', link: '/tags/desserts' },
  { name: 'GLUTEN-FREE', link: '/tags/gluten-free' },
  { name: 'HEALTHY', link: '/tags/healthy' },
  { name: 'HIGH-PROTEIN', link: '/tags/high-protein' },
  { name: 'HOLIDAY', link: '/tags/holiday' },
  { name: 'KID-FRIENDLY', link: '/tags/kid-friendly' },
];

const tagData2 = [
  { name: 'LOW-CARB', link: '/tags/low-carb' },
  { name: 'MEAL PREP', link: '/tags/meal-prep' },
  { name: 'MEAT', link: '/tags/meat' },
  { name: 'ONE-POT', link: '/tags/one-pot' },
  { name: 'QUICK MEALS', link: '/tags/quick-meals' },
  { name: 'SPICY', link: '/tags/spicy' },
  { name: 'VEGETARIAN', link: '/tags/vegetarian' },
  { name: 'VIDEO RECIPE', link: '/tags/video-recipe' },
];

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Account = () => {
const [view, setView] = useState('account');
const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
   const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showForgotPopup, setShowForgotPopup] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotError, setForgotError] = useState('');
  const [resetStep, setResetStep] = useState(1); // 1: enter email, 2: reset password
  const [toast, setToast] = useState('');
  const [resetPassword, setResetPassword] = useState('');
  const [resetConfirm, setResetConfirm] = useState('');
  const toastTimeout = useRef(null);

  // Toast message function (move this up!)
  const showToast = (msg) => {
    setToast(msg);
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToast(''), 3000);
  };

  
 useEffect(() => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (userInfo && userInfo.role !== 'admin') {
    setIsLoggedIn(true);
    setFormData((prev) => ({
      ...prev,
      firstName: userInfo.firstName || '',
      lastName: userInfo.lastName || '',
      displayName: userInfo.displayName || userInfo.name || '',
      email: userInfo.email || '',
      currentPassword: userInfo.password || '', // <-- Add this line
    }));
  }
}, []);
    const saveUserInfo = (info) => {
    localStorage.setItem('userInfo', JSON.stringify(info));
  };

  // Login
// const handleLogin = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await fetch('http://localhost:5000/api/users/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email: loginEmail, password: loginPassword })
//     });

//     const data = await res.json();
//     if (!res.ok) throw new Error(data.message);

//     const { user, token } = data;

//     localStorage.setItem('userInfo', JSON.stringify(user));
//     localStorage.setItem('token', token);

//     setIsLoggedIn(true);
//     showToast('Login successful!');

//     // Role-based redirect
//     // In handleLogin()
//     if (data.user.role === 'admin') {
//     window.location.href = 'http://localhost:3000'; // or your admin app URL
//     } else {
//     navigate('/account');
//     }


//   } catch (err) {
//     setLoginError(err.message);
//   }
// };

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(getApiUrl('/api/users/login'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: loginEmail, password: loginPassword })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    // Save login info
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    localStorage.setItem("userInfo", JSON.stringify(data.user));
    localStorage.setItem("isLoggedIn", data.role === 'admin' ? 'false' : 'true');

    setFormData((prev) => ({
      ...prev,
      firstName: data.user.firstName || '',
      lastName: data.user.lastName || '',
      displayName: data.user.displayName || data.user.name || '',
      email: data.user.email || '',
      currentPassword: '',
    }));
    setIsLoggedIn(true);
    showToast('Login successful!');

    // Redirect based on role
    if (data.role === "admin") {
      window.location.href = getAdminAppUrl();
    } else {
      navigate("/account");
    }

  } catch (err) {
    setLoginError(err.message);
  }
};


// Signup
const handleSignup = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(getApiUrl('/api/users/register'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: signupName,
        email: signupEmail,
        password: signupPassword
      })
    });               

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    // Clear signup fields
    setSignupName('');
    setSignupEmail('');
    setSignupPassword('');

    // Do NOT set token or isLoggedIn here
    showToast('Signup successful! Please login to continue.');
    setIsSignup(false); // Switch to login form

  } catch (err) {
    setSignupError(err.message);
  }
};

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/account');
  };

  // Handle account form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle account form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      alert('New passwords do not match');
      return;
    }
    // Save updated info
    saveUserInfo({
      ...formData,
      displayName: formData.displayName || formData.email.split('@')[0],
      email: formData.email,
    });
    alert('Changes saved successfully');
  };

  // Handle forgot password
const handleForgotPassword = (e) => {
  e.preventDefault();
  setForgotError('');
  if (!validateEmail(forgotEmail)) {
    setForgotError('Invalid email format.');
    return;
  }
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (!userInfo || userInfo.email !== forgotEmail) {
    setForgotError('No account found with this email.');
    return;
  }
  setResetStep(2); // Show reset password fields
};

// Handle reset password
const handleResetPassword = (e) => {
  e.preventDefault();
  if (!resetPassword || resetPassword.length < 6) {
    setForgotError('Password must be at least 6 characters.');
    return;
  }
  if (resetPassword !== resetConfirm) {
    setForgotError('Passwords do not match.');
    return;
  }
  // Update password in localStorage (simulate)
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  userInfo.password = resetPassword;
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  setShowForgotPopup(false);
  setForgotEmail('');
  setResetPassword('');
  setResetConfirm('');
  setResetStep(1);
  showToast('Password reset successful! Email sent.');
  // Simulate email sending
  // In real app, call backend API here
};

  // Show account details if logged in
  if (isLoggedIn) {
    return (
      <>
        <div className='page-header-sec'>
          <Pageheader pageheader={pageProps} />
        </div>
        <div className="account-wrapper">
          <div className="account-sidebar">
            <button onClick={() => setView('account')} className={view === 'account' ? 'active' : ''}>
              Account details
            </button>
            <button onClick={handleLogout}>Log out</button>
          </div>
          <div className="account-content">
            {view === 'account' && (
              <form onSubmit={handleSubmit} className="account-form">
                <h2>Account Details</h2>
                <div className="row">
                  <div className="input-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="displayName">Display Name</label>
                  <input
                    type="text"
                    id="displayName"
                    placeholder="Display Name"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <h3>Password change</h3>
                <div className="input-group">
                  <label htmlFor="currentPassword">Current Password</label>
                  <div className="password-wrapper">
                    <input
                      type={showCurrent ? "text" : "password"}
                      id="currentPassword"
                      placeholder="Current Password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                    />
                    <p
                         className="eye-icon"
                        onClick={() => setShowCurrent((v) => !v)}
                        style={{ marginLeft: '-2rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                        title={showCurrent ? "Show password" : "Hide password"}
                        tabIndex={0}
                        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setShowCurrent(v => !v); }}
                        aria-label={showCurrent ? "Hide password" : "Show password"}
                        role="button"
                    >
                        {showCurrent ? <FaEye /> :<FaEyeSlash /> }
                     </p>
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="newPassword">New Password</label>
                  <div className="password-wrapper">
                    <input
                      type={showNew ? "text" : "password"}
                      id="newPassword"
                      placeholder="New Password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                    />
                    <p
                         className="eye-icon"
                        onClick={() => setShowNew((v) => !v)}
                        style={{ marginLeft: '-2rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                        title={showNew ? "Show password" : "Hide password"}
                        tabIndex={0}
                        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setShowNew(v => !v); }}
                        aria-label={showNew ? "Hide password" : "Show password"}
                        role="button"
                    >
                        {showNew ? <FaEye /> :<FaEyeSlash />}
                     </p>
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <div className="password-wrapper">
                    <input
                      type={showConfirm ? "text" : "password"}
                      id="confirmPassword"
                      placeholder="Confirm New Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <p
                         className="eye-icon"
                        onClick={() => setShowConfirm((v) => !v)}
                        style={{ marginLeft: '-2rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                        title={showConfirm ? "Show password" : "Hide password"}
                        tabIndex={0}
                        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setShowConfirm(v => !v); }}
                        aria-label={showConfirm ? "Hide password" : "Show password"}
                        role="button"
                    >
                        {showConfirm ? <FaEye /> :<FaEyeSlash />}
                     </p>
                  </div>
                </div>
                <button type="submit" className="save-btn">Save changes</button>
              </form>
            )}
          </div>
        </div>
        <div className='tags-sec'>
          <PopularTags
            tags={tagData}
            tags2={tagData2}
            heading="Explore Popular Tags"
            subheading="From quick meals to healthy dishes, our popular tags make it easy to explore delicious options with one click."
          />
        </div>
      </>
    );
  }
  // ❌ Show Login/Signup form if not logged in
  return (
    <div className={`auth-container ${isSignup ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form onSubmit={handleSignup} noValidate>
          <h2>Create Account</h2>
          <div className="input-group">
            
            <input
              type="text"
              id="signupName"
              placeholder="Name"
              value={signupName}
              onChange={e => setSignupName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              id="signupEmail"
              placeholder="Email"
              value={signupEmail}
              onChange={e => setSignupEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="signupPassword"
              placeholder="Password"
              value={signupPassword}
              onChange={e => setSignupPassword(e.target.value)}
            />
          </div>
          {signupError && <div className="error">{signupError}</div>}
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form onSubmit={handleLogin} noValidate>
          <h2>Sign In</h2>
          <div className="input-group">
            <input
              type="email"
              id="loginEmail"
              placeholder="Email"
              value={loginEmail}
              onChange={e => setLoginEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="loginPassword"
              placeholder="Password"
              value={loginPassword}
              onChange={e => setLoginPassword(e.target.value)}
            />
          </div>
          {loginError && <div className="error">{loginError}</div>}
          <p className="forgot-link" onClick={() => setShowForgotPopup(true)} style={{cursor:'pointer', color:'#007bff', marginTop:'8px'}}>Forgot password?</p>
          <button type="submit">Sign In</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h2>Welcome Back!</h2>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={() => setIsSignup(false)} type="button">
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h2>Hey, There!</h2>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={() => setIsSignup(true)} type="button">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {showForgotPopup && (
  <div className="popup-overlay">
    <div className="popup">
      <button className="close-btn" onClick={() => { setShowForgotPopup(false); setForgotError(''); setResetStep(1); }}>×</button>
      {resetStep === 1 ? (
        <form onSubmit={handleForgotPassword}>
          <h3>Forgot Password</h3>
          <input
            type="email"
            placeholder="Enter your email"
            value={forgotEmail}
            onChange={e => setForgotEmail(e.target.value)}
            required
          />
          {forgotError && <div className="error">{forgotError}</div>}
          <button type="submit">Next</button>
        </form>
      ) : (
        <form onSubmit={handleResetPassword}>
          <h3>Reset Password</h3>
          <input
            type="password"
            placeholder="New Password"
            value={resetPassword}
            onChange={e => setResetPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={resetConfirm}
            onChange={e => setResetConfirm(e.target.value)}
            required
          />
          {forgotError && <div className="error">{forgotError}</div>}
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  </div>
)}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};

export default Account
