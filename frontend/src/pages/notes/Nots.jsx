
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  ChevronRight,
  FileText,
  GraduationCap,
  Layers3,
  Sparkles,
  Download,
  Eye,
} from "lucide-react";

import "./Nots.css";
import { notesData } from "./notesData";
import Navbar from "../../components/Navbar.js";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);

  // ============================================================
  // CATEGORY DATA
  // ============================================================

  const categories = [
    {
      id: "cs",
      title: "CS Notes",
      description: "Computer Science & Engineering",
      icon: <Layers3 size={34} />,
      accent: "teal",
    },
    {
      id: "it",
      title: "IT Notes",
      description: "Information Technology",
      icon: <BookOpen size={34} />,
      accent: "blue",
      comingSoon: true,
    },
    {
      id: "aiml",
      title: "AI / ML Notes",
      description: "Artificial Intelligence & Machine Learning",
      icon: <Sparkles size={34} />,
      accent: "purple",
      comingSoon: true,
    },
  ];

  // ============================================================
  // SEMESTERS
  // ============================================================

  const semesters = [
    { number: "1", title: "1st Semester" },
    { number: "2", title: "2nd Semester" },
    { number: "3", title: "3rd Semester" },
    { number: "4", title: "4th Semester" },
    { number: "5", title: "5th Semester" },
    { number: "6", title: "6th Semester" },
    { number: "7", title: "7th Semester" },
    { number: "8", title: "8th Semester" },
  ];

  // ============================================================
  // HELPERS
  // ============================================================

  const getSubjectsForSemester = (semester) => {
    return notesData.filter((item) => item.semester === semester);
  };

  const goBack = () => {
    if (selectedUnit) {
      setSelectedUnit(null);
    } else if (selectedSubject) {
      setSelectedSubject(null);
    } else if (selectedSemester) {
      setSelectedSemester(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  const openPdf = (pdf) => {
    window.open(pdf, "_blank", "noopener,noreferrer");
  };

  // ============================================================
  // HOME — CATEGORY SCREEN
  // ============================================================

  const renderCategories = () => {
    return (
      <motion.section
        className="notes-home"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="notes-hero">
          <motion.div
            className="hero-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 160,
            }}
          >
            <GraduationCap size={42} />
          </motion.div>

          <div>
            <h1>Academic Notes</h1>
            <p>
              Your centralized space for semester-wise notes, subjects and
              study material.
            </p>
          </div>
        </div>

        <div className="category-heading">
          <span className="heading-line"></span>

          <div>
            <h2>Choose Your Stream</h2>
            <p>Select a category to explore your notes</p>
          </div>

          <span className="heading-line"></span>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className={`category-card ${category.accent}`}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={
                !category.comingSoon
                  ? {
                      y: -8,
                      scale: 1.015,
                    }
                  : {}
              }
              whileTap={
                !category.comingSoon
                  ? { scale: 0.98 }
                  : {}
              }
              onClick={() => {
                if (!category.comingSoon) {
                  setSelectedCategory(category);
                }
              }}
            >
              <div className="category-glow"></div>

              <div className="category-icon">
                {category.icon}
              </div>

              <div className="category-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>

                {category.comingSoon ? (
                  <span className="coming-soon">
                    Coming Soon
                  </span>
                ) : (
                  <span className="explore-link">
                    Explore Notes
                    <ChevronRight size={18} />
                  </span>
                )}
              </div>

              {!category.comingSoon && (
                <div className="card-arrow">
                  <ChevronRight size={22} />
                </div>
              )}

              <div className="card-shine"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    );
  };

  // ============================================================
  // SEMESTER SCREEN
  // ============================================================

  const renderSemesters = () => {
    return (
      <motion.section
        className="notes-level-section"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="level-header">
          <button className="back-btn" onClick={goBack}>
            <ArrowLeft size={18} />
            Back
          </button>

          <div>
            <span className="level-label">
              {selectedCategory?.title}
            </span>

            <h2>Choose Semester</h2>

            <p>Select your semester to continue</p>
          </div>
        </div>

        <div className="semester-grid">
          {semesters.map((semester, index) => {
            const subjectCount = getSubjectsForSemester(
              semester.number
            ).length;

            return (
              <motion.div
                key={semester.number}
                className={`semester-card ${
                  subjectCount === 0 ? "empty-semester" : ""
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                }}
                whileHover={
                  subjectCount > 0
                    ? {
                        y: -6,
                      }
                    : {}
                }
                onClick={() => {
                  if (subjectCount > 0) {
                    setSelectedSemester(semester.number);
                  }
                }}
              >
                <div className="semester-number">
                  {semester.number}
                </div>

                <div className="semester-info">
                  <h3>{semester.title}</h3>

                  <span>
                    {subjectCount > 0
                      ? `${subjectCount} Subjects`
                      : "Notes coming soon"}
                  </span>
                </div>

                {subjectCount > 0 && (
                  <ChevronRight
                    className="semester-arrow"
                    size={22}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    );
  };

  // ============================================================
  // SUBJECT SCREEN
  // ============================================================

  const renderSubjects = () => {
    const subjects = getSubjectsForSemester(selectedSemester);

    return (
      <motion.section
        className="notes-level-section"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="level-header">
          <button className="back-btn" onClick={goBack}>
            <ArrowLeft size={18} />
            Back
          </button>

          <div>
            <span className="level-label">
              {selectedCategory?.title}
            </span>

            <h2>Choose Subject</h2>

            <p>
              Semester {selectedSemester} • Select a subject to
              continue
            </p>
          </div>
        </div>

        {subjects.length > 0 ? (
          <div className="subject-grid">
            {subjects.map((subject, index) => {
              const totalUnits = subject.notes?.length || 0;
              const guideCount = subject.guide?.length || 0;

              return (
                <motion.div
                  key={subject.subject}
                  className="subject-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  onClick={() => setSelectedSubject(subject)}
                >
                  <div className="subject-icon">
                    <BookOpen size={28} />
                  </div>

                  <div className="subject-body">
                    <span className="subject-semester">
                      SEMESTER {selectedSemester}
                    </span>

                    <h3>{subject.subject}</h3>

                    <div className="subject-stats">

                      {/* SHOW UNITS ONLY WHEN UNITS EXIST */}
                      {totalUnits > 0 && (
                        <span>
                          <FileText size={15} />
                          {totalUnits}{" "}
                          {totalUnits === 1 ? "Unit" : "Units"}
                        </span>
                      )}

                      {/* SHOW GUIDE ONLY WHEN GUIDE EXISTS */}
                      {guideCount > 0 && (
                        <span>
                          <GraduationCap size={15} />
                          Guide
                        </span>
                      )}

                    </div>
                  </div>

                  <div className="subject-arrow">
                    <ChevronRight size={21} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="empty-state">
            <FileText size={40} />
            <h3>Notes Coming Soon</h3>

            <p>
              Study material for Semester {selectedSemester} will
              be available soon.
            </p>
          </div>
        )}
      </motion.section>
    );
  };

  // ============================================================
  // UNIT SCREEN
  // ============================================================

  const renderUnits = () => {
    const units = selectedSubject.notes || [];
    const guides = selectedSubject.guide || [];

    return (
      <motion.section
        className="notes-level-section"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="level-header">
          <button className="back-btn" onClick={goBack}>
            <ArrowLeft size={18} />
            Back
          </button>

          <div>
            <span className="level-label">
              SEMESTER {selectedSemester}
            </span>

            <h2>{selectedSubject.subject}</h2>

            <p>Select a unit or study guide</p>
          </div>
        </div>

        {/* ======================================================
            STUDY GUIDE
        ====================================================== */}

        {guides.length > 0 && (
          <div className="guide-section">
            <div className="section-title">
              <GraduationCap size={21} />

              <div>
                <h3>Study Guide</h3>
                <p>Complete subject reference material</p>
              </div>
            </div>

            <div className="guide-grid">
              {guides.map((guide) => (
                <div
                  className="guide-card"
                  key={guide.title}
                >
                  <div className="guide-icon">
                    <FileText size={24} />
                  </div>

                  <div className="guide-info">
                    <h4>{guide.title}</h4>
                    <span>PDF Document</span>
                  </div>

                  <button
                    className="pdf-action"
                    onClick={() => openPdf(guide.pdf)}
                  >
                    <Eye size={17} />
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================
            UNITS
        ====================================================== */}

        <div className="units-section">
          <div className="section-title">
            <Layers3 size={21} />

            <div>
              <h3>Units</h3>
              <p>Choose a unit to view available notes</p>
            </div>
          </div>

          {units.length > 0 ? (
            <div className="unit-grid">
              {units.map((unit, index) => (
                <motion.div
                  key={unit.unit}
                  className="unit-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  onClick={() => setSelectedUnit(unit)}
                >
                  <div className="unit-number">
                    {unit.unit === "Complete Notes"
                      ? "ALL"
                      : unit.unit.replace("Unit ", "")}
                  </div>

                  <div className="unit-info">
                    <span>NOTES</span>

                    <h4>{unit.unit}</h4>

                    <p>
                      {unit.files?.length || 0}{" "}
                      {unit.files?.length === 1
                        ? "PDF"
                        : "PDFs"}{" "}
                      available
                    </p>
                  </div>

                  <ChevronRight
                    size={21}
                    className="unit-arrow"
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="empty-state small">
              <FileText size={36} />
              <h3>Unit Notes Coming Soon</h3>

              <p>
                Notes for this subject will be added soon.
              </p>
            </div>
          )}
        </div>
      </motion.section>
    );
  };

  // ============================================================
  // PDF SCREEN
  // ============================================================

  const renderFiles = () => {
    const files = selectedUnit.files || [];

    return (
      <motion.section
        className="notes-level-section"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="level-header">
          <button className="back-btn" onClick={goBack}>
            <ArrowLeft size={18} />
            Back
          </button>

          <div>
            <span className="level-label">
              {selectedSubject.subject}
            </span>

            <h2>{selectedUnit.unit}</h2>

            <p>Select a PDF to view or download</p>
          </div>
        </div>

        {files.length > 0 ? (
          <div className="files-grid">
            {files.map((file, index) => (
              <motion.div
                key={file.title}
                className="file-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
              >
                <div className="file-icon">
                  <FileText size={30} />
                </div>

                <div className="file-content">
                  <span>PDF NOTES</span>
                  <h3>{file.title}</h3>
                </div>

                <div className="file-actions">
                  <button
                    className="view-pdf-btn"
                    onClick={() => openPdf(file.pdf)}
                  >
                    <Eye size={17} />
                    View
                  </button>

                  <a
                    href={file.pdf}
                    download
                    className="download-pdf-btn"
                  >
                    <Download size={17} />
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <FileText size={40} />
            <h3>No PDFs Available</h3>

            <p>
              Notes for this unit will be added soon.
            </p>
          </div>
        )}
      </motion.section>
    );
  };

  // ============================================================
  // MAIN RENDER
  // ============================================================

  return (
    <>
      <Navbar />

      <main className="academic-notes-page">
        <AnimatePresence mode="wait">

          {!selectedCategory && renderCategories()}

          {selectedCategory &&
            !selectedSemester &&
            renderSemesters()}

          {selectedSemester &&
            !selectedSubject &&
            renderSubjects()}

          {selectedSubject &&
            !selectedUnit &&
            renderUnits()}

          {selectedUnit && renderFiles()}

        </AnimatePresence>
      </main>
    </>
  );
}

export default App;

