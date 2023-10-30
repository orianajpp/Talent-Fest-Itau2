import { Routes, Route } from 'react-router-dom';
import FormRequest from '../FormViewRequest.jsx';
import FormIncidence from '../FormViewIncidence.jsx';
import ResumeView from '../Resume.jsx';

function FormHandler() {
    return (
        <div>
            <Routes>
                <Route path="FormRequest" element={<FormRequest />}>
                    <Route path="Resume" element={<ResumeView />} />
                </Route>
                <Route path="FormIncidence" element={<FormIncidence />}>
                    <Route path="Resume" element={<ResumeView />} />
                </Route>
            </Routes>
        </div>
    );
}

export default FormHandler;
