import React from "react";

export default class TodoInput  extends  React.Component{

    render() {
        const {item,handleChange,handleSubmit}=this.props

        return (
            <div className="card">
                <pre>{JSON.stringify(item)}</pre>
                <div className="card-body my-3">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="input-group">
                          <div className="input-group-prepend">
                              <div className="input-group-text bg-primary text-white">
                                  <i className="fa fa-book"></i>
                              </div>
                          </div>
                            <input type="text"
                                   className="form-control text-capitalize"
                                   placeholder="Enter the Task"
                                     value={item}
                                      onChange={handleChange}          />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-sm  btn-block mt-3">Add item</button>

                        </div>
                    </form>
                </div>

            </div>
        );
    }

}
