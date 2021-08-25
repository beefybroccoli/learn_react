import React from "react";
import { Link } from "react-router-dom";

export default function Page404(props) {
  return (
    <div>
      <h2>Page Not Found</h2>

      <p>
        Return back to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
}
