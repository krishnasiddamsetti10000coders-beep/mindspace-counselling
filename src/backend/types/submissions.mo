import Common "common";

module {
  public type Timestamp = Common.Timestamp;

  public type ContactSubmission = {
    id : Nat;
    name : Text;
    phone : Text;
    counsellingType : Text;
    timestamp : Timestamp;
  };

  public type VoiceSubmission = {
    id : Nat;
    name : Text;
    phone : Text;
    audioStorageKey : Text;
    timestamp : Timestamp;
  };
};
