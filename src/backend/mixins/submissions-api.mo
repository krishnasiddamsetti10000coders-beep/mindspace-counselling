import Types "../types/submissions";
import SubmissionsLib "../lib/submissions";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (
  contactSubmissions : List.List<Types.ContactSubmission>,
  voiceSubmissions : List.List<Types.VoiceSubmission>,
  nextContactId : Nat,
  nextVoiceId : Nat,
) {
  public func storeContactSubmission(name : Text, phone : Text, counsellingType : Text) : async Nat {
    Runtime.trap("not implemented");
  };

  public func storeVoiceSubmission(name : Text, phone : Text, audioStorageKey : Text) : async Nat {
    Runtime.trap("not implemented");
  };

  public query func getContactSubmissions() : async [Types.ContactSubmission] {
    Runtime.trap("not implemented");
  };

  public query func getVoiceSubmissions() : async [Types.VoiceSubmission] {
    Runtime.trap("not implemented");
  };
};
