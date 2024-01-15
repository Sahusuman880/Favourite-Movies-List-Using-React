import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  return (
    <div class={`container ${styles.header}`}>
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom ">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none "
        >
          <svg class="bi me-2" width="40" height="32">
            <use xlink:href="#bootstrap"></use>
          </svg>
          <span class="fs-4">Favourite Movie List</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <Link to="/" class="nav-link " aria-current="page">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/create-post" class="nav-link">
              Create Movie List
            </Link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              About
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
