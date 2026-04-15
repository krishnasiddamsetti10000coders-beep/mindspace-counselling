import Types "types/submissions";
import SubmissionsApi "mixins/submissions-api";
import List "mo:core/List";

actor {
  let contactSubmissions = List.empty<Types.ContactSubmission>();
  let voiceSubmissions = List.empty<Types.VoiceSubmission>();
  var nextContactId : Nat = 0;
  var nextVoiceId : Nat = 0;

  include SubmissionsApi(contactSubmissions, voiceSubmissions, nextContactId, nextVoiceId);
};
