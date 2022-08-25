import "../components/Footer.css";

export default function Footer() {
    const CurrentYear = () => {
        return new Date().getFullYear();
    }
    
    return (
        <>
        <footer className="footer">
            <p><span class="copyleft"/> App-Astronomie - {CurrentYear()}</p>
        </footer>
        </>
    )
};