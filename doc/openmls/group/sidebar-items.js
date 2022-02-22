initSidebarItems({"constant":[["MIXED_CIPHERTEXT_WIRE_FORMAT_POLICY","Incoming wire formats can be mixed while outgoing wire formats are always ciphertext."],["MIXED_PLAINTEXT_WIRE_FORMAT_POLICY","Incoming wire formats can be mixed while outgoing wire formats are always plaintext."],["PURE_CIPHERTEXT_WIRE_FORMAT_POLICY","Incoming and outgoing wire formats are always ciphertext."],["PURE_PLAINTEXT_WIRE_FORMAT_POLICY","Incoming and outgoing wire formats are always plaintext."],["WIRE_FORMAT_POLICIES","All valid wire format policy combinations."]],"enum":[["AddMembersError","Add members error"],["CommitToPendingProposalsError","Commit to pending proposals error"],["CreateCommitError","Create commit error"],["CreateMessageError","Create message error"],["EmptyInputError","EmptyInput error"],["ExportPublicGroupStateError","Export public group state error"],["ExportSecretError","Export secret error"],["ExternalCommitError","External Commit error"],["ExternalCommitValidationError","External Commit validaton error"],["IncomingWireFormatPolicy","Defines what wire format is acceptable for incoming handshake messages. Note that application messages must always be encrypted."],["InnerState","`Enum` that indicates whether the inner group state has been modified since the last time it was persisted. `InnerState::Changed` indicates that the state has changed and that [`.save()`] should be called. `InnerState::Persisted` indicates that the state has not been modified and therefore doesn’t need to be persisted."],["LeaveGroupError","Leave group error"],["MlsGroupState","[`MlsGroupState`] determines the state of an [`MlsGroup`]. The different states and their transitions are as follows:"],["MlsGroupStateError","Group state error"],["NewGroupError","New group error"],["Node","Container enum for leaf and parent nodes."],["OutgoingWireFormatPolicy","Defines what wire format should be used for outgoing handshake messages. Note that application messages must always be encrypted."],["ParseMessageError","Parse message error"],["PendingCommitState","Pending Commit state. Differentiates between Commits issued by group members and External Commits."],["ProposalValidationError","Proposal validation error"],["ProposeAddMemberError","Propose add members error"],["ProposeRemoveMemberError","Propose remove members error"],["ProposeSelfUpdateError","Propose self update error"],["RemoveMembersError","Remove members error"],["RemoveOperation","Helper `enum` that classifies the kind of remove operation. This can be used to better interpret the semantic value of a remove proposal that is covered in a Commit message."],["SelfUpdateError","Self update error"],["StageCommitError","Stage Commit error"],["UnverifiedMessageError","Unverified message error"],["ValidationError","Validation error"],["WelcomeError","Welcome error"]],"mod":[["config","Configuration module for [`MlsGroup`] configurations."],["errors","MlsGroup errors"],["processing","Processing functions of an [`MlsGroup`] for incoming messages."]],"struct":[["GroupEpoch","Group epoch. Internally this is stored as a `u64`. The group epoch is incremented with every valid Commit that is merged into the group state."],["GroupId","A group ID. The group ID is chosen by the creator of the group and should be globally unique."],["LeafNode","This struct implements the MLS leaf node and contains a [`KeyPackage`] and potentially a corresponding `HpkePrivateKey`."],["MlsGroup","A `MlsGroup` represents an MLS group with a high-level API. The API exposes high level functions to manage a group by adding/removing members, get the current member list, etc."],["MlsGroupConfig","Specifies the configuration parameters for a [`MlsGroup`]. Refer to the User Manual for more information about the different configuration values."],["MlsGroupConfigBuilder","Builder for an [`MlsGroupConfig`]."],["ParentNode","This struct implements the MLS parent node. It contains its public key, parent hash and unmerged leaves. Additionally, it may contain the private key corresponding to the public key."],["ProposalStore","A [ProposalStore] can store the standalone proposals that are received from the DS in between two commit messages."],["QueuedAddProposal","A queued Add proposal"],["QueuedProposal","Alternative representation of a Proposal, where the sender is extracted from the encapsulating MlsPlaintext and the ProposalRef is attached."],["QueuedPskProposal","A queued PresharedKey proposal"],["QueuedRemoveProposal","A queued Remove proposal"],["QueuedUpdateProposal","A queued Update proposal"],["StagedCommit","Contains the changes from a commit to the group state."],["WireFormatPolicy","Defines what wire format is desired for outgoing handshake messages. Note that application messages must always be encrypted."]]});