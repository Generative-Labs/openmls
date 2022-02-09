initSidebarItems({"enum":[["CredentialError","An error that occurs in methods of a [`Credential`]."],["Node","Container enum for leaf and parent nodes."],["ProcessedMessage","Message that contains messages that are syntactically and semantically correct. [StagedCommit] and [QueuedProposal] can be inspected for authorization purposes."],["Psk","PSK enum that can contain the different PSK types"],["PskType","Type of PSK."],["Sender","All possible sender types according to the MLS protocol spec."],["UnverifiedContextMessage","Contains an [VerifiableMlsPlaintext] and a [Credential] if it is a message from a `Member` or a `NewMember`.  It sets the serialized group context and verifies the membership tag for member messages.  It can be converted to a verified message by verifying the signature, either with the credential or an external signature key."]],"struct":[["ApplicationMessage","Application message received through a [ProcessedMessage]."],["BranchPsk","Branch PSK"],["ExternalPsk","External PSK."],["MlsMessageIn","Unified message type for incoming MLS messages."],["MlsMessageOut","Unified message type for outgoing MLS messages."],["PreSharedKeyId","A `PreSharedKeyID` is used to uniquely identify the PSKs that get injected in the key schedule."],["PreSharedKeys","`PreSharedKeys` is a vector of `PreSharedKeyID`s. struct { PreSharedKeyID psks<0..2^16-1>; } PreSharedKeys;"],["PskBundle","Contains the secret part of the PSK as well as the public part that is used as a marker for injection into the key schedule."],["ReinitPsk","ReInit PSK."],["SenderRatchetConfiguration","Stores the configuration parameters for sender ratchets."],["UnverifiedGroupMessage","Part of [UnverifiedContextMessage]."],["UnverifiedMessage","Partially checked and potentially decrypted message. Use this to inspect the [Credential] of the message sender and the optional `aad` if the original message was an [MlsCiphertext]."],["UnverifiedPreconfiguredMessage","Part of [UnverifiedContextMessage]."],["VerifiedExternalMessage","External message, where all semantic checks on the framing have been successfully performed. Note: External messages are not fully supported yet #106"],["VerifiedMemberMessage","Member message, where all semantic checks on the framing have been successfully performed."]],"trait":[["TlsDeserializeTrait","The `Deserialize` trait defines functions to deserialize a byte slice to a struct or enum."],["TlsSerializeTrait","The `Serialize` trait provides functions to serialize a struct or enum."],["TlsSizeTrait","The `Size` trait needs to be implemented by any struct that should be efficiently serialized. This allows to collect the length of a serialized structure before allocating memory."]],"type":[["LeafIndex","Index type to index the leaves in the binary tree"]]});