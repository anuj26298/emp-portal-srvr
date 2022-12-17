import dbConnect from "../../../utils/dbConnect";
import Employee from "../../../models/Employee";

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const response = await Employee.findById(id);

                if (!response) {
                    return res.status(400).json({ Error: 'Employee not found'});
                }

                res.status(200).json({ success: true, data: response });
            } catch (error) {
                res.status(400).json({ Error: 'Employee not found'});
            }
            break;
        case 'PUT':
            try {
                const response = await Employee.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!response) {
                    return res.status(400).json({ Error: "Employee not found or cannot perform update operation"});
                }

                res.status(200).json({ success: true, data: response });
            } catch (error) {
                res.status(400).json({ Error: "Employee not found or cannot perform update operation" });
            }
            break;
        case 'DELETE':
            try {
                const response = await Employee.deleteOne({ _id: id });

                if (!response) {
                    return res.status(400).json({ Error: 'Error in deletion' })
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ Error: 'Error in deletion' })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}