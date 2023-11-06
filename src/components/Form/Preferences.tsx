import React from "react";

export function PreferencesForm() {
  return (
    <>
      <div>
        <input type="checkbox" id="emailNotification" />
        <label htmlFor="emailNotification">
          Deseja receber notificações e promoções no e-mail
        </label>
      </div>
    </>
  );
}

// - Deseja receber notificações e promoções no e-mail
