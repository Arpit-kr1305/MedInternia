import { Router, Request } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import {
  getUserProfile,
  updateUserProfile,
  getInternScorecard,
  getLeaderboard,
  verifyDoctor,
  grantContributorBadge,
  upgradeProfile,
  awardPointsToIntern
} from '../controllers/userController';

const router = Router();

// Get user profile by ID
router.get('/:userId/profile', getUserProfile);

// Update user profile
router.put('/:userId/profile', authenticate, updateUserProfile);

// Get intern scorecard
router.get('/:userId/scorecard', getInternScorecard);

// Get leaderboard
router.get('/leaderboard', getLeaderboard);

// Verify doctor (admin/verified doctor only)
router.patch('/:userId/verify', authenticate, authorize('doctor'), verifyDoctor);

// Grant contributor badge
router.post('/:userId/grant-contributor', authenticate, grantContributorBadge);

// Upgrade intern profile to doctor
router.patch('/upgrade-profile', authenticate, upgradeProfile);

// Doctor awards points to intern as recommendation
router.post('/:internId/award-points', authenticate, awardPointsToIntern);
export default router;
