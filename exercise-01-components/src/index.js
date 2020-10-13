import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Message from "./Message";
import Panel from "./Panel";
const App = () => {
  console.log("hello");
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={{
            name: "asad",
            date: "Today on at 2:00Pm",
            comment: "nice job",
          }}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={{
            name: "Hameed",
            date: "Today on at 4:00Pm",
            comment: "nice job work man",
          }}
        />
      </ApprovalCard>
      <Panel>
        <Message
          service="change in the service"
          details="we just update our privacy services"
        ></Message>
      </Panel>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
