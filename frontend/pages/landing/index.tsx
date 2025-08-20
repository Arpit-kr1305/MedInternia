import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Eye,
  Clock,
  MapPin,
  GraduationCap,
  Award,
  Phone,
  Mail,
} from "lucide-react";

const VisibilityToggle = () => {
  const [isPublic, setIsPublic] = useState(true);
  const toggleVisibility = () => setIsPublic((prev) => !prev);
  return (
    <button
      onClick={toggleVisibility}
      style={{
        fontSize: "14px",
        color: isPublic ? "#065f46" : "#991b1b",
        background: isPublic ? "#bbf7d0" : "#fecaca",
        border: "1px solid",
        borderColor: isPublic ? "#34d399" : "#f87171",
        borderRadius: "6px",
        padding: "4px 10px",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      {isPublic ? "🌍 Public" : "🔒 Private"}
    </button>
  );
};

const ProfileSidebar = () => (
  <div
    style={{
      backgroundColor: "#fff",
      borderRadius: 16,
      padding: 24,
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      border: "1px solid #f0f4f8",
      position: "sticky",
      top: 20,
      height: "fit-content",
    }}
  >
    <div
      style={{
        background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
        height: 120,
        borderRadius: 12,
        position: "relative",
        marginBottom: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          backgroundColor: "rgba(255,255,255,0.2)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Heart size={30} color="white" />
      </div>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: -40,
        marginBottom: 16,
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          backgroundColor: "#e0f2fe",
          border: "4px solid white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: "bold",
          color: "#0284c7",
        }}
      >
        EC
      </div>
    </div>
    <div style={{ textAlign: "center", marginBottom: 20 }}>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#1e293b",
          margin: "0 0 8px 0",
        }}
      >
        Dr. Elias Chen
      </h2>
      <p style={{ fontSize: 14, color: "#64748b", margin: 0, lineHeight: 1.5 }}>
        Cardiologist specializing in interventional procedures and preventive
        medicine
      </p>
    </div>
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <span style={{ fontSize: 14, color: "#64748b" }}>
          85% to next badge
        </span>
      </div>
      <div
        style={{
          width: "100%",
          height: 8,
          backgroundColor: "#e2e8f0",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "85%",
            height: "100%",
            background: "linear-gradient(90deg, #10b981 0%, #059669 100%)",
            borderRadius: 4,
          }}
        ></div>
      </div>
    </div>
    <div style={{ marginBottom: 24 }}>
      <h3
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: "#1e293b",
          marginBottom: 12,
        }}
      >
        Badges & Achievements
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { name: "Expert Cardiologist", color: "#10b981" },
          { name: "Top Contributor", color: "#0ea5e9" },
          { name: "Research Pioneer", color: "#8b5cf6" },
          { name: "Mentor", color: "#f59e0b" },
        ].map((badge, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              backgroundColor: badge.color + "20",
              borderRadius: 8,
              border: `1px solid ${badge.color}30`,
            }}
          >
            <Award size={16} color={badge.color} />
            <span style={{ fontSize: 14, color: badge.color, fontWeight: 500 }}>
              {badge.name}
            </span>
          </div>
        ))}
      </div>
    </div>
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {[
          {
            icon: <Heart size={16} color="#64748b" />,
            label: "Specialization:",
            value: "Cardiology",
          },
          {
            icon: <MapPin size={16} color="#64748b" />,
            label: "Hospital:",
            value: "St. Judes Medical Center",
          },
          {
            icon: <GraduationCap size={16} color="#64748b" />,
            label: "Education:",
            value: "Harvard University",
          },
          {
            icon: <MapPin size={16} color="#64748b" />,
            label: "Location:",
            value: "Boston, MA",
          },
          {
            icon: <Clock size={16} color="#64748b" />,
            label: "Experience:",
            value: "12 years",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            {item.icon}
            <span style={{ fontSize: 14, color: "#64748b" }}>{item.label}</span>
            <span style={{ fontSize: 14, color: "#1e293b", fontWeight: 500 }}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#f8fafc",
        borderRadius: 12,
        marginBottom: 20,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 24, fontWeight: 700, color: "#10b981" }}>
          4.9
        </div>
        <div style={{ fontSize: 12, color: "#64748b" }}>Rating</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 24, fontWeight: 700, color: "#0ea5e9" }}>
          156
        </div>
        <div style={{ fontSize: 12, color: "#64748b" }}>Cases</div>
      </div>
    </div>
    <div>
      <h3
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: "#1e293b",
          marginBottom: 12,
        }}
      >
        Contact
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Mail size={16} color="#64748b" />
          <span style={{ fontSize: 14, color: "#64748b" }}>
            elias.chen@stjudes.com
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Phone size={16} color="#64748b" />
          <span style={{ fontSize: 14, color: "#64748b" }}>
            +1 (617) 555-0123
          </span>
        </div>
      </div>
    </div>
  </div>
);

const PostForm = () => {
  const [activeTab, setActiveTab] = useState("Case Study");
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 24,
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        border: "1px solid #f0f4f8",
        marginBottom: 24,
      }}
    >
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#1e293b",
          marginBottom: 20,
        }}
      >
        Post New
      </h2>
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[
            "Announcement",
            "Case Study",
            "Research Paper",
            "Information",
            "Experience",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                border:
                  activeTab === tab ? "2px solid #10b981" : "1px solid #e2e8f0",
                backgroundColor: activeTab === tab ? "#10b98120" : "#fff",
                color: activeTab === tab ? "#10b981" : "#64748b",
                fontSize: 14,
                fontWeight: activeTab === tab ? 600 : 500,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 16px",
            border: "1px solid #e2e8f0",
            borderRadius: 8,
            fontSize: 14,
            marginBottom: 16,
            outline: "none",
            transition: "border-color 0.2s",
          }}
        />
        <textarea
          placeholder="Share your case study details, findings, and insights..."
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          style={{
            width: "100%",
            height: 120,
            padding: "12px 16px",
            border: "1px solid #e2e8f0",
            borderRadius: 8,
            fontSize: 14,
            resize: "vertical",
            outline: "none",
            fontFamily: "inherit",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <VisibilityToggle />
          <Eye size={16} color="#64748b" />
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button
            style={{
              padding: "8px 16px",
              border: "1px solid #e2e8f0",
              borderRadius: 8,
              backgroundColor: "#fff",
              color: "#64748b",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Save as Draft
          </button>
          <button
            style={{
              padding: "8px 16px",
              border: "none",
              borderRadius: 8,
              backgroundColor: "#10b981",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Publish New
          </button>
        </div>
      </div>
    </div>
  );
};

const CaseStudyList = () => (
  <div
    style={{
      backgroundColor: "#fff",
      borderRadius: 16,
      padding: 24,
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      border: "1px solid #f0f4f8",
      width: "100%",
      minWidth: 0,
      marginBottom: 24,
      boxSizing: "border-box",
      flex: 1,
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1e293b" }}>
        Recent Case Studies
      </h2>
      <button
        style={{
          color: "#0ea5e9",
          fontSize: 14,
          fontWeight: 600,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        Newest →
      </button>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {[
        {
          title: "Pediatric Cardiology",
          date: "Oct 3, 29, 2325 • 4.99 yrs",
          content: "John Nechistuaraec ou(su)cfdo pccdewttc.",
          likes: 516,
          comments: 4,
          shares: 6,
          isPublic: true,
        },
        {
          title: "Pediatric Cardiology",
          date: "Oct 2, 24, 2328 • 4.38 yrs",
          content: "Yanen thosenwiscce or poincisende (Taol).",
          likes: 2519,
          comments: 6,
          shares: 3,
          isPublic: false,
        },
        {
          title: "Pediatric Cardiology",
          date: "Oct 2, 25, 2333 • 4.22 yrs",
          content: "Pediatric cardiology constradatisao...",
          likes: 892,
          comments: 12,
          shares: 8,
          isPublic: true,
        },
      ].map((study, idx) => (
        <div
          key={idx}
          style={{
            padding: 16,
            border: "1px solid #f1f5f9",
            borderRadius: 12,
            backgroundColor: "#fafbfc",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#e0f2fe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                fontWeight: "bold",
                color: "#0284c7",
                flexShrink: 0,
              }}
            >
              EC
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 8,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#1e293b",
                      margin: "0 0 4px 0",
                    }}
                  >
                    {study.title}
                  </h3>
                  <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>
                    {study.date}
                  </p>
                </div>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 4,
                  }}
                >
                  •••
                </button>
              </div>
              <p
                style={{ fontSize: 14, color: "#374151", margin: "0 0 12px 0" }}
              >
                {study.content}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", gap: 16 }}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 4 }}
                  >
                    <Heart size={16} color="#64748b" />
                    <span style={{ fontSize: 14, color: "#64748b" }}>
                      {study.likes}
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 4 }}
                  >
                    <MessageCircle size={16} color="#64748b" />
                    <span style={{ fontSize: 14, color: "#64748b" }}>
                      {study.comments}
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 4 }}
                  >
                    <Share2 size={16} color="#64748b" />
                    <span style={{ fontSize: 14, color: "#64748b" }}>
                      {study.shares}
                    </span>
                  </div>
                </div>
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: 12,
                    fontSize: 12,
                    fontWeight: 500,
                    backgroundColor: study.isPublic ? "#dbeafe" : "#dcfce7",
                    color: study.isPublic ? "#1e40af" : "#166534",
                  }}
                >
                  {study.isPublic ? "Public" : "Private"}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RecommendedConnections = () => (
  <div
    style={{
      backgroundColor: "#fff",
      borderRadius: 16,
      padding: 24,
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      border: "1px solid #f0f4f8",
      marginBottom: 24,
      boxSizing: "border-box",
      width: "100%",
      minWidth: 0,
    }}
  >
    <h3
      style={{
        fontSize: 18,
        fontWeight: 700,
        color: "#1e293b",
        marginBottom: 20,
      }}
    >
      Recommended Connections
    </h3>
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        gap: 16,
        paddingBottom: 8,
        scrollbarWidth: "thin",
        scrollbarColor: "#e0e8f0 #fff",
      }}
    >
      {[
        { name: "Dr. Sarah Wong", specialty: "Oncologist" },
        { name: "Dr. Michael Chen", specialty: "Neurologist" },
        { name: "Dr. Sarah Johnson", specialty: "Pediatrician" },
        { name: "Dr. Robert Kim", specialty: "Surgeon" },
        { name: "Dr. Priya Patel", specialty: "Dermatologist" },
        { name: "Dr. John Lee", specialty: "Radiologist" },
      ].map((doctor, idx) => (
        <div
          key={idx}
          style={{
            minWidth: 180,
            maxWidth: 220,
            backgroundColor: "#fafbfc",
            border: "1px solid #f1f5f9",
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            padding: "16px 12px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              backgroundColor: "#e0f2fe",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: "bold",
              color: "#0284c7",
              marginBottom: 8,
            }}
          >
            {doctor.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <h4
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#1e293b",
              margin: "0 0 2px 0",
            }}
          >
            {doctor.name}
          </h4>
          <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>
            {doctor.specialty}
          </p>
          <button
            style={{
              width: "100%",
              padding: "6px 12px",
              backgroundColor: "#10b981",
              color: "white",
              border: "none",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              marginTop: 8,
            }}
          >
            Connect
          </button>
        </div>
      ))}
    </div>
  </div>
);

const Landing = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const notificationCategories = [
    { label: "All", count: 8 },
    { label: "Comments", count: 4 },
    { label: "Likes", count: 2 },
    { label: "Collaboration", count: 1 },
    { label: "Mentions", count: 1 },
  ];
  const notificationItems = [
    {
      category: "Comments",
      color: "#10b981",
      bg: "#f0fdf4",
      text: "Dr. Martinez replied to your comment on 'Pediatric Arrhythmia Case'",
      time: "2 min ago",
    },
    {
      category: "Collaboration",
      color: "#0ea5e9",
      bg: "#f0f9ff",
      text: "Dr. Loo sent you a collaboration request for cardiac research",
      time: "15 min ago",
    },
    {
      category: "Likes",
      color: "#f59e0b",
      bg: "#fffbeb",
      text: "Your case study received 25 new likes",
      time: "1 hour ago",
    },
  ];
  // Ref for PostForm height sync
  const postFormRef = React.useRef<HTMLDivElement>(null);
  const [postFormHeight, setPostFormHeight] = useState<number | undefined>(
    undefined
  );
  React.useEffect(() => {
    if (postFormRef.current) {
      setPostFormHeight(postFormRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: 20 }}>
        <div className="landing-grid">
          <div className="landing-left">
            <ProfileSidebar />
          </div>
          <div
            className="landing-main"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              width: "100%",
              minWidth: 0,
            }}
          >
            <div ref={postFormRef}>
              <PostForm />
            </div>
            <div style={{ width: "100%", minWidth: 0 }}>
              <CaseStudyList />
              <RecommendedConnections />
            </div>
          </div>
          <div className="landing-right">
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 16,
                  padding: 24,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  border: "1px solid #f0f4f8",
                  maxHeight: postFormHeight ? postFormHeight : 480,
                  minHeight: postFormHeight ? postFormHeight : 240,
                  overflowY: "auto",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#1e293b",
                        margin: 0,
                      }}
                    >
                      Notifications
                      <span
                        style={{
                          backgroundColor: "#ef4444",
                          color: "white",
                          fontSize: 12,
                          fontWeight: 600,
                          padding: "2px 6px",
                          borderRadius: 10,
                          marginLeft: 8,
                        }}
                      >
                        3
                      </span>
                    </h3>
                  </div>
                  <button
                    style={{
                      color: "#0ea5e9",
                      fontSize: 14,
                      fontWeight: 600,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      marginLeft: "auto",
                    }}
                  >
                    More →
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    marginBottom: 18,
                    flexWrap: "wrap",
                  }}
                >
                  {notificationCategories.map((cat) => (
                    <button
                      key={cat.label}
                      onClick={() => setActiveCategory(cat.label)}
                      style={{
                        padding: "6px 16px",
                        borderRadius: 20,
                        border:
                          activeCategory === cat.label
                            ? "2px solid #10b981"
                            : "1px solid #e2e8f0",
                        backgroundColor:
                          activeCategory === cat.label ? "#10b98120" : "#fff",
                        color:
                          activeCategory === cat.label ? "#10b981" : "#64748b",
                        fontSize: 13,
                        fontWeight: activeCategory === cat.label ? 600 : 500,
                        cursor: "pointer",
                        transition: "all 0.2s",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      {cat.label}
                      <span
                        style={{
                          backgroundColor:
                            activeCategory === cat.label
                              ? "#10b981"
                              : "#e2e8f0",
                          color:
                            activeCategory === cat.label ? "#fff" : "#64748b",
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "2px 7px",
                          borderRadius: 10,
                          marginLeft: 4,
                        }}
                      >
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 12 }}
                >
                  {notificationItems
                    .filter(
                      (item) =>
                        activeCategory === "All" ||
                        item.category === activeCategory
                    )
                    .map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: 12,
                          borderLeft: `3px solid ${item.color}`,
                          backgroundColor: item.bg,
                        }}
                      >
                        <p
                          style={{
                            fontSize: 13,
                            color: "#1e293b",
                            margin: "0 0 4px 0",
                            fontWeight: 500,
                          }}
                        >
                          {item.text}
                        </p>
                        <span style={{ fontSize: 11, color: "#64748b" }}>
                          ⏰ {item.time}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .landing-grid {
          display: grid;
          grid-template-columns: 320px 1fr 360px;
          gap: 24px;
        }
        @media (max-width: 1200px) {
          .landing-grid {
            grid-template-columns: 280px 1fr 300px;
          }
        }
        @media (max-width: 968px) {
          .landing-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .landing-left {
            order: 2;
          }
          .landing-main {
            order: 1;
          }
          .landing-right {
            order: 3;
          }
        }
        .landing-main {
          min-width: 0;
        }
        .landing-main > div {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Landing;
