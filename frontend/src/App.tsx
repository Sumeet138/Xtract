import { ThemeProvider } from "@/components/theme-provider"
import { LandingPage, ContactPage } from "@/pages"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App