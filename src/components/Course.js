import React from "react";
import {
  useParams
} from "react-router-dom";

export function Course() {
  let { id } = useParams();
  return (
    <div>
      <h3> Course ID: {id}</h3>{" "}
    </div>
  );
}

export default Course;
