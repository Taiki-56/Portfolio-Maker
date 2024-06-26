import express from 'express';
import { PortfolioController } from '../controllers';
import { validateToken } from './validation';

const router = express.Router();

router.get('/', validateToken, PortfolioController.getPortfolios);
router.get('/:id', validateToken, PortfolioController.getPortfolioById);
router.post('/', validateToken, PortfolioController.createPortfolio);
router.patch('/:id', validateToken, PortfolioController.updatePortfolio);
router.post('/:id', validateToken, PortfolioController.setPortfolioTheme);
router.delete('/:id', validateToken, PortfolioController.deletePortfolio);
router.patch('/move/:portfolioId/:sectionId', validateToken, PortfolioController.moveSectionUpDown);
router.get('/live/:tinyUrlId', PortfolioController.getPortfolioByTinyUrlId); 

export default router;
