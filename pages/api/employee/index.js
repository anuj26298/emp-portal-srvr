import dbConnect from "../../../utils/dbConnect";
import Employee from "../../../models/Employee";

dbConnect();

export default async (req, res) => {
    const { method, body } = req;

    switch (method) {
        case 'GET':
            try {
                const employee = await Employee.find();
                res.status(200).json({ data: employee })
            } catch (erorr) {
                res.status(404).json({ error: 'Employee not exists' })
            }
            break;
        case 'POST': 
            try {
                const response = await Employee.create(body)
                res.status(201).json({data: response})
            } catch (error) {
                console.log('error',error)
                res.status(400).json({error: 'Unable to perform create action'});
            }
            break;
        default:
             res.status(404).json({error: 'No handler found for requested page'})
    }
}