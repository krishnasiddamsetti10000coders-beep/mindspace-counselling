import Types "../types/submissions";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  public func storeContact(
    contacts : List.List<Types.ContactSubmission>,
    nextId : Nat,
    name : Text,
    phone : Text,
    counsellingType : Text,
  ) : Nat {
    Runtime.trap("not implemented");
  };

  public func storeVoice(
    voices : List.List<Types.VoiceSubmission>,
    nextId : Nat,
    name : Text,
    phone : Text,
    audioStorageKey : Text,
  ) : Nat {
    Runtime.trap("not implemented");
  };

  public func getAllContacts(contacts : List.List<Types.ContactSubmission>) : [Types.ContactSubmission] {
    Runtime.trap("not implemented");
  };

  public func getAllVoices(voices : List.List<Types.VoiceSubmission>) : [Types.VoiceSubmission] {
    Runtime.trap("not implemented");
  };
};
