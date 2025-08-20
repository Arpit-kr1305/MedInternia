import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Chip,
  Paper,
  Divider,
  useMediaQuery,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FilterListIcon from "@mui/icons-material/FilterList";
import CategoryIcon from "@mui/icons-material/Category";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { useRouter } from "next/router";
import ProfileDropdown from "./ProfileDropdown";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar({ route }: { route?: string }) {
  const router = useRouter();
  // Role-based dashboard navigation
  const handleHomeNav = () => {
    // If logged in, always go to dashboard; else go to main page
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role") || "";
      // Only route to dashboard if logged in
      if (token) {
        switch (role) {
          case "doctor":
            router.push("/dashboard/doctor");
            return;
          case "patient":
            router.push("/dashboard/patient");
            return;
          case "intern":
            router.push("/dashboard/intern");
            return;
          case "admin":
            router.push("/dashboard/admin");
            return;
          default:
            router.push("/dashboard");
            return;
        }
      }
    }
    // If not logged in, always go to main page
    router.push("/");
  };
  // More dropdown state
  const [moreAnchorEl, setMoreAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const moreOpen = Boolean(moreAnchorEl);
  const handleMoreClick = (event: React.MouseEvent<HTMLElement>) => {
    setMoreAnchorEl(event.currentTarget);
  };
  const handleMoreClose = () => {
    setMoreAnchorEl(null);
  };
  // Active nav button underline
  const navActive = (path: string) => ({
    fontWeight: 600,
    borderBottom: router.pathname === path ? "2px solid #2193b0" : "none",
    borderRadius: 0,
    mx: 1,
    px: 2,
    color: router.pathname === path ? "#2193b0" : undefined,
  });
  // ...existing code...
  // Recent searches and suggestions
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [recentSearches, setRecentSearches] = React.useState<string[]>([
    "Cardiology",
    "Internships",
    "Webinar on Diabetes",
  ]);
  const [search, setSearch] = React.useState("");
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  // Keyboard shortcut: focus search on '/'
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <>
      <AppBar
        sx={{
          background: "linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)",
          zIndex: 1201,
        }}
      >
        <Toolbar sx={{ flexWrap: "wrap", minHeight: 64, px: { xs: 1, md: 3 } }}>
          <IconButton color="inherit" sx={{ mr: 2 }} onClick={handleHomeNav}>
            <HomeIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, letterSpacing: 1, mr: 2, cursor: "pointer" }}
            onClick={handleHomeNav}
          >
            Med-Internia
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: 0,
            }}
          >
            {/* ...existing code for search bars... */}
          </Box>
          {/* Main Nav Buttons with active underline */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Button
              color="inherit"
              component={Link}
              href="/landing"
              sx={navActive("/landing")}
            >
              Landing
            </Button>
            <Button
              color="inherit"
              component={Link}
              href="/cases"
              sx={navActive("/cases")}
            >
              Cases
            </Button>
            <Button
              color="inherit"
              component={Link}
              href="/jobs"
              sx={navActive("/jobs")}
            >
              Jobs
            </Button>
            <Button
              color="inherit"
              component={Link}
              href="/webinars"
              sx={navActive("/webinars")}
            >
              Webinars
            </Button>
            <Button
              color="inherit"
              onClick={handleMoreClick}
              sx={{ textTransform: "none" }}
            >
              More
            </Button>
            <Menu
              anchorEl={moreAnchorEl}
              open={moreOpen}
              onClose={handleMoreClose}
              PaperProps={{
                sx: { minWidth: 160, borderRadius: 2, textAlign: "center" },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleMoreClose();
                  router.push("/resources");
                }}
                sx={{ justifyContent: "center" }}
              >
                Resources
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleMoreClose();
                  router.push("/leaderboard");
                }}
                sx={{ justifyContent: "center" }}
              >
                Leaderboard
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleMoreClose();
                  router.push("/badges");
                }}
                sx={{ justifyContent: "center" }}
              >
                Badges
              </MenuItem>
            </Menu>
            <IconButton
              color="inherit"
              sx={{ ml: 1 }}
              onClick={() => router.push("/notifications")}
              aria-label="Notifications"
            >
              <NotificationsIcon />
            </IconButton>
            <IconButton
              color="inherit"
              component={Link}
              href="/about"
              sx={{ ml: 1 }}
            >
              <InfoIcon />
            </IconButton>
          </Box>
          {/* Profile Dropdown: always visible, right side */}
          <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
            <ProfileDropdown onNavigate={router.push} />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
