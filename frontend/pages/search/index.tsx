import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Container,
  Paper,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const mockData = ["Result 1", "Result 2", "Result 3"];

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [searched, setSearched] = useState(false);

  const performSearch = (q: string) => {
    const trimmed = (q || "").trim();
    setQuery(trimmed);
    if (!trimmed) {
      setResults([]);
      setSearched(false);
      return;
    }
    const found = mockData.filter((item) => item.toLowerCase().includes(trimmed.toLowerCase()));
    setResults(found);
    setSearched(true);
    // Sync search query to URL for bookmarking and refresh consistency
    router.replace({ pathname: '/search', query: { q: trimmed } }, undefined, { shallow: true });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Enter key handler on the text field
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      performSearch(query);
    }
  };

  // If query provided via URL (?q=...), perform search on mount/update
  useEffect(() => {
    const q = Array.isArray(router.query.q) ? router.query.q[0] : router.query.q || "";
    if (q) {
      performSearch(q);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.q]);

  const displayQuery = query.length > 50 ? `${query.substring(0, 47)}...` : query;

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {/* Search input field */}
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Search Results */}
      {!searched ? (
        <Typography variant="body1" align="center" color="text.secondary">
          Enter a search term above and press Enter to find results.
        </Typography>
      ) : results.length > 0 ? (
        <Box display="flex" flexWrap="wrap" gap={2}>
          {results.map((item, index) => (
            <Box key={index} flex="1 1 calc(33.33% - 16px)">
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">{item}</Typography>
                <Typography variant="body2">This is a preview of the search result content.</Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      ) : (
        <Typography variant="body1" align="center" color="text.secondary">
          No results found for &quot;<Box component="span" sx={{ fontWeight: 600 }}>{displayQuery}</Box>&quot;.
        </Typography>
      )}
    </Container>
  );
}
