import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../index.js";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  useEffect(() => {
    try {
      axios
<<<<<<< HEAD:backend/client/src/components/Job/Jobs.js
        .get(`${window.location.origin}/api/job/getall`, {
=======
        .get("https://job-nest-tau.vercel.app/api/job/getall", {
>>>>>>> 97456ba19bc8dcbdf5cfb4bb5a93c9bc23c55691:client/src/components/Job/Jobs.js
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  if (!isAuthenticated) {
    navigateTo("/");
  }

  return (
    <section className="jobs page">
      <div className="container">
        <h1>AVAILABLE JOBS</h1>
        <div className="banner">
          {jobs.jobs &&
            jobs.jobs.map((element) => {
              return (
                <div className="card" key={element._id}>
                  <p>{element.title}</p>
                  <p>{element.category}</p>
                  <p>{element.country}</p>
                  <Link to={`/job/${element._id}`}>Job Details</Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
