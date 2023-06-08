import { render, screen } from "@testing-library/react"
import Login from "./Login"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userEvent from "@testing-library/user-event";


test('On initial render, the login button should be disabled', () => {
    render(
        <BrowserRouter>
            <Routes>
            <Route path="*" element= {<Login/>}/>                
            </Routes>
        </BrowserRouter>
    )
    screen.getByRole('button')
    expect(screen.getByRole('button', { Name: /loginid/i })).toBeDisabled();
})

test('when loginid is entered, the login button should be enabled',()=>{
    render(
        <BrowserRouter>
            <Routes>
            <Route path="*" element= {<Login/>}/>                
            </Routes>
        </BrowserRouter>
    )

    userEvent.type(screen.getByPlaceholderText(/loginid/i),"user");
    expect(screen.getByRole('button', { Name: /loginid/i })).toBeEnabled();

})