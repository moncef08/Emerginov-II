import { Router } from 'express';

const router = Router();

import { createProject, getProjects,getProjectById,deleteProject,updateProject,getProjectByUserId} from '../controllers/project.controller';

// /api/projects/
router.post('/',createProject);
router.get('/', getProjects);
// /api/projects/:projectId
router.get('/:id',getProjectById);
router.get('/users/:UserId',getProjectByUserId);
router.delete('/:id',deleteProject);
router.put('/:id',updateProject);
export default router;