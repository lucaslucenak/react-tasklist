import React from 'react'

export const TasklistInput = () => {
    return (
        <div>
            <form className="d-flex justify-content-center align-items-center mb-4">
                <div className="form-outline flex-fill">
                    <input type="text" id="form3" className="form-control form-control-lg" />
                    <label className="form-label" for="form3">What do you need to do today?</label>
                </div>
                <button type="submit" className="btn btn-primary btn-lg ms-2">Add</button>
            </form>
        </div>
    )
}
