import constants from '../CteText.js'

export class PortafolioController {


    static getIndex(req,res) {
        res.render('pages/index',{constants : constants})
    }
}