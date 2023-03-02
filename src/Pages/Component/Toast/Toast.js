import React from 'react';

const Toast = () => {
    return (
        <div>
            <div className="toast toast-top toast-end">
  <div className="alert alert-info">
    <div>
      <span>New mail arrived.</span>
    </div>
  </div>
  <div className="alert alert-success">
    <div>
      <span>Message sent successfully.</span>
    </div>
  </div>
</div>
        </div>
    );
};

export default Toast;