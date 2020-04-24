import './index.css';
import Card from "./Card";

export default () => (
    <div>
        <header className="App-header">
            <img
                src="/static/logo.png"
                className="static-logo"
                alt="logo"
            />
        </header>
        <div className="Grid">
            <Card />
            <Card />
            <Card />
        </div>
    </div>
);
