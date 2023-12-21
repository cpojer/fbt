/**
 * @flow strict
 * @format
 */

declare class BabelNodeComment {
  value: string;
  start: number;
  end: number;
  loc: BabelNodeSourceLocation;
}

declare class BabelNodeCommentBlock extends BabelNodeComment {
  type: 'CommentBlock';
}

declare class BabelNodeCommentLine extends BabelNodeComment {
  type: 'CommentLine';
}

declare class BabelNodeSourceLocation {
  start: {
    line: number,
    column: number,
  };

  end: {
    line: number,
    column: number,
  };
}

declare class BabelNode {
  leadingComments?: $ReadOnlyArray<BabelNodeComment>;
  innerComments?: $ReadOnlyArray<BabelNodeComment>;
  trailingComments?: $ReadOnlyArray<BabelNodeComment>;
  start: ?number;
  end: ?number;
  loc: ?BabelNodeSourceLocation;
}

declare class BabelNodeArrayExpression extends BabelNode {
  type: 'ArrayExpression';
  elements?: $ReadOnlyArray<
    null | BabelNodeExpression | BabelNodeSpreadElement,
  >;
}

declare class BabelNodeAssignmentExpression extends BabelNode {
  type: 'AssignmentExpression';
  operator: string;
  left: BabelNodeLVal;
  right: BabelNodeExpression;
}

declare class BabelNodeBinaryExpression extends BabelNode {
  type: 'BinaryExpression';
  operator:
    | '+'
    | '-'
    | '/'
    | '%'
    | '*'
    | '**'
    | '&'
    | '|'
    | '>>'
    | '>>>'
    | '<<'
    | '^'
    | '=='
    | '==='
    | '!='
    | '!=='
    | 'in'
    | 'instanceof'
    | '>'
    | '<'
    | '>='
    | '<=';
  left: any;
  right: BabelNodeExpression;
}

declare class BabelNodeInterpreterDirective extends BabelNode {
  type: 'InterpreterDirective';
  value: string;
}

declare class BabelNodeDirective extends BabelNode {
  type: 'Directive';
  value: BabelNodeDirectiveLiteral;
}

declare class BabelNodeDirectiveLiteral extends BabelNode {
  type: 'DirectiveLiteral';
  value: string;
}

declare class BabelNodeBlockStatement extends BabelNode {
  type: 'BlockStatement';
  body: $ReadOnlyArray<BabelNodeStatement>;
  directives?: $ReadOnlyArray<BabelNodeDirective>;
}

declare class BabelNodeBreakStatement extends BabelNode {
  type: 'BreakStatement';
  label?: BabelNodeIdentifier;
}

declare class BabelNodeCallExpression extends BabelNode {
  type: 'CallExpression';
  callee: BabelNodeExpression | BabelNodeV8IntrinsicIdentifier;
  arguments: $ReadOnlyArray<
    | BabelNodeExpression
    | BabelNodeSpreadElement
    | BabelNodeJSXNamespacedName
    | BabelNodeArgumentPlaceholder,
  >;
  optional?: true | false;
  typeArguments?: BabelNodeTypeParameterInstantiation;
  typeParameters?: BabelNodeTSTypeParameterInstantiation;
}

declare class BabelNodeCatchClause extends BabelNode {
  type: 'CatchClause';
  param?: BabelNodeIdentifier | BabelNodeArrayPattern | BabelNodeObjectPattern;
  body: BabelNodeBlockStatement;
}

declare class BabelNodeConditionalExpression extends BabelNode {
  type: 'ConditionalExpression';
  test: BabelNodeExpression;
  consequent: BabelNodeExpression;
  alternate: BabelNodeExpression;
}

declare class BabelNodeContinueStatement extends BabelNode {
  type: 'ContinueStatement';
  label?: BabelNodeIdentifier;
}

declare class BabelNodeDebuggerStatement extends BabelNode {
  type: 'DebuggerStatement';
}

declare class BabelNodeDoWhileStatement extends BabelNode {
  type: 'DoWhileStatement';
  test: BabelNodeExpression;
  body: BabelNodeStatement;
}

declare class BabelNodeEmptyStatement extends BabelNode {
  type: 'EmptyStatement';
}

declare class BabelNodeExpressionStatement extends BabelNode {
  type: 'ExpressionStatement';
  expression: BabelNodeExpression;
}

declare class BabelNodeFile extends BabelNode {
  type: 'File';
  program: BabelNodeProgram;
  comments: any;
  tokens: any;
}

declare class BabelNodeForInStatement extends BabelNode {
  type: 'ForInStatement';
  left: BabelNodeVariableDeclaration | BabelNodeLVal;
  right: BabelNodeExpression;
  body: BabelNodeStatement;
}

declare class BabelNodeForStatement extends BabelNode {
  type: 'ForStatement';
  init?: BabelNodeVariableDeclaration | BabelNodeExpression;
  test?: BabelNodeExpression;
  update?: BabelNodeExpression;
  body: BabelNodeStatement;
}

declare class BabelNodeFunctionDeclaration extends BabelNode {
  type: 'FunctionDeclaration';
  id?: BabelNodeIdentifier;
  params: $ReadOnlyArray<
    | BabelNodeIdentifier
    | BabelNodePattern
    | BabelNodeRestElement
    | BabelNodeTSParameterProperty,
  >;
  body: BabelNodeBlockStatement;
  generator?: boolean;
  async?: boolean;
  declare?: boolean;
  returnType?:
    | BabelNodeTypeAnnotation
    | BabelNodeTSTypeAnnotation
    | BabelNodeNoop;
  typeParameters?:
    | BabelNodeTypeParameterDeclaration
    | BabelNodeTSTypeParameterDeclaration
    | BabelNodeNoop;
}

declare class BabelNodeFunctionExpression extends BabelNode {
  type: 'FunctionExpression';
  id?: BabelNodeIdentifier;
  params: $ReadOnlyArray<
    | BabelNodeIdentifier
    | BabelNodePattern
    | BabelNodeRestElement
    | BabelNodeTSParameterProperty,
  >;
  body: BabelNodeBlockStatement;
  generator?: boolean;
  async?: boolean;
  returnType?:
    | BabelNodeTypeAnnotation
    | BabelNodeTSTypeAnnotation
    | BabelNodeNoop;
  typeParameters?:
    | BabelNodeTypeParameterDeclaration
    | BabelNodeTSTypeParameterDeclaration
    | BabelNodeNoop;
}

declare class BabelNodeIdentifier extends BabelNode {
  type: 'Identifier';
  name: any;
  decorators?: $ReadOnlyArray<BabelNodeDecorator>;
  optional?: boolean;
  typeAnnotation?:
    | BabelNodeTypeAnnotation
    | BabelNodeTSTypeAnnotation
    | BabelNodeNoop;
}

declare class BabelNodeIfStatement extends BabelNode {
  type: 'IfStatement';
  test: BabelNodeExpression;
  consequent: BabelNodeStatement;
  alternate?: BabelNodeStatement;
}

declare class BabelNodeLabeledStatement extends BabelNode {
  type: 'LabeledStatement';
  label: BabelNodeIdentifier;
  body: BabelNodeStatement;
}

declare class BabelNodeStringLiteral extends BabelNode {
  type: 'StringLiteral';
  value: string;
}

declare class BabelNodeNumericLiteral extends BabelNode {
  type: 'NumericLiteral';
  value: number;
}

declare class BabelNodeNullLiteral extends BabelNode {
  type: 'NullLiteral';
}

declare class BabelNodeBooleanLiteral extends BabelNode {
  type: 'BooleanLiteral';
  value: boolean;
}

declare class BabelNodeRegExpLiteral extends BabelNode {
  type: 'RegExpLiteral';
  pattern: string;
  flags?: any;
}

declare class BabelNodeLogicalExpression extends BabelNode {
  type: 'LogicalExpression';
  operator: '||' | '&&' | '??';
  left: BabelNodeExpression;
  right: BabelNodeExpression;
}

declare class BabelNodeMemberExpression extends BabelNode {
  type: 'MemberExpression';
  object: BabelNodeExpression;
  property: any;
  computed?: boolean;
  optional?: true | false;
}

declare class BabelNodeNewExpression extends BabelNode {
  type: 'NewExpression';
  callee: BabelNodeExpression | BabelNodeV8IntrinsicIdentifier;
  arguments: $ReadOnlyArray<
    | BabelNodeExpression
    | BabelNodeSpreadElement
    | BabelNodeJSXNamespacedName
    | BabelNodeArgumentPlaceholder,
  >;
  optional?: true | false;
  typeArguments?: BabelNodeTypeParameterInstantiation;
  typeParameters?: BabelNodeTSTypeParameterInstantiation;
}

declare class BabelNodeProgram extends BabelNode {
  type: 'Program';
  body: $ReadOnlyArray<BabelNodeStatement>;
  directives?: $ReadOnlyArray<BabelNodeDirective>;
  sourceType?: 'script' | 'module';
  interpreter?: BabelNodeInterpreterDirective;
  sourceFile: string;
}

declare class BabelNodeObjectExpression extends BabelNode {
  type: 'ObjectExpression';
  properties: $ReadOnlyArray<
    BabelNodeObjectMethod | BabelNodeObjectProperty | BabelNodeSpreadElement,
  >;
}

declare class BabelNodeObjectMethod extends BabelNode {
  type: 'ObjectMethod';
  kind?: 'method' | 'get' | 'set';
  key: any;
  params: $ReadOnlyArray<
    | BabelNodeIdentifier
    | BabelNodePattern
    | BabelNodeRestElement
    | BabelNodeTSParameterProperty,
  >;
  body: BabelNodeBlockStatement;
  computed?: boolean;
  generator?: boolean;
  async?: boolean;
  decorators?: $ReadOnlyArray<BabelNodeDecorator>;
  returnType?:
    | BabelNodeTypeAnnotation
    | BabelNodeTSTypeAnnotation
    | BabelNodeNoop;
  typeParameters?:
    | BabelNodeTypeParameterDeclaration
    | BabelNodeTSTypeParameterDeclaration
    | BabelNodeNoop;
}

declare class BabelNodeObjectProperty extends BabelNode {
  type: 'ObjectProperty';
  key: any;
  value: BabelNodeExpression | BabelNodePatternLike;
  computed?: boolean;
  shorthand?: any;
  decorators?: $ReadOnlyArray<BabelNodeDecorator>;
}

declare class BabelNodeRestElement extends BabelNode {
  type: 'RestElement';
  argument: BabelNodeLVal;
  decorators?: $ReadOnlyArray<BabelNodeDecorator>;
  typeAnnotation?:
    | BabelNodeTypeAnnotation
    | BabelNodeTSTypeAnnotation
    | BabelNodeNoop;
}

declare class BabelNodeReturnStatement extends BabelNode {
  type: 'ReturnStatement';
  argument?: BabelNodeExpression;
}

declare class BabelNodeSequenceExpression extends BabelNode {
  type: 'SequenceExpression';
  expressions: $ReadOnlyArray<BabelNodeExpression>;
}

declare class BabelNodeParenthesizedExpression extends BabelNode {
  type: 'ParenthesizedExpression';
  expression: BabelNodeExpression;
}

declare class BabelNodeSwitchCase extends BabelNode {
  type: 'SwitchCase';
  test?: BabelNodeExpression;
  consequent: $ReadOnlyArray<BabelNodeStatement>;
}

declare class BabelNodeSwitchStatement extends BabelNode {
  type: 'SwitchStatement';
  discriminant: BabelNodeExpression;
  cases: $ReadOnlyArray<BabelNodeSwitchCase>;
}

declare class BabelNodeThisExpression extends BabelNode {
  type: 'ThisExpression';
}

declare class BabelNodeThrowStatement extends BabelNode {
  type: 'ThrowStatement';
  argument: BabelNodeExpression;
}

declare class BabelNodeTryStatement extends BabelNode {
  type: 'TryStatement';
  block: any;
  handler?: BabelNodeCatchClause;
  finalizer?: BabelNodeBlockStatement;
}

declare class BabelNodeUnaryExpression extends BabelNode {
  type: 'UnaryExpression';
  operator: 'void' | 'throw' | 'delete' | '!' | '+' | '-' | '~' | 'typeof';
  argument: BabelNodeExpression;
  prefix?: boolean;
}

declare class BabelNodeUpdateExpression extends BabelNode {
  type: 'UpdateExpression';
  operator: '++' | '--';
  argument: BabelNodeExpression;
  prefix?: boolean;
}

declare class BabelNodeVariableDeclaration extends BabelNode {
  type: 'VariableDeclaration';
  kind: 'var' | 'let' | 'const';
  declarations: $ReadOnlyArray<BabelNodeVariableDeclarator>;
  declare?: boolean;
}

declare class BabelNodeVariableDeclarator extends BabelNode {
  type: 'VariableDeclarator';
  id: BabelNodeLVal;
  init?: BabelNodeExpression;
  definite?: boolean;
}

declare class BabelNodeWhileStatement extends BabelNode {
  type: 'WhileStatement';
  test: BabelNodeExpression;
  body: BabelNodeStatement;
}

declare class BabelNodeWithStatement extends BabelNode {
  type: 'WithStatement';
  object: BabelNodeExpression;
  body: BabelNodeStatement;
}

declare class BabelNodeAssignmentPattern extends BabelNode {
  type: 'AssignmentPattern';
  left:
    | BabelNodeIdentifier
    | BabelNodeObjectPattern
    | BabelNodeArrayPattern
    | BabelNodeMemberExpression;
  right: BabelNodeExpression;
  decorators?: $ReadOnlyArray<BabelNodeDecorator>;
  typeAnnotation?:
    | BabelNodeTypeAnnotation
    | BabelNodeTSTypeAnnotation
    | BabelNodeNoop;
}

declare class BabelNodeArrayPattern extends BabelNode {
  type: 'ArrayPattern';
  elements: $ReadOnlyArray<null | BabelNodePatternLike>;
  decorators?: $ReadOnlyArray<BabelNodeDecorator>;
  typeAnnotation?:
    | BabelNodeTypeAnnotation
    | BabelNodeTSTypeAnnotation
    | BabelNodeNoop;
}

declare class BabelNodeArrowFunctionExpression extends BabelNode {
  type: 'ArrowFunctionExpression';
  params: $ReadOnlyArray<
    | BabelNodeIdentifier
    | BabelNodePattern
    | BabelNodeRestElement
    | BabelNodeTSParameterProperty,
  >;
  body: BabelNodeBlockStatement | BabelNodeExpression;
  async?: boolean;
  expression: boolean;
  generator?: boolean;
  returnType?:
    | BabelNodeTypeAnnotation
    | BabelNodeTSTypeAnnotation
    | BabelNodeNoop;
  typeParameters?:
    | BabelNodeTypeParameterDeclaration
    | BabelNodeTSTypeParameterDeclaration
    | BabelNodeNoop;
}

declare class BabelNodeClassBody extends BabelNode {
  type: 'ClassBody';
  body: $ReadOnlyArray<
    | BabelNodeClassMethod
    | BabelNodeClassPrivateMethod
    | BabelNodeClassProperty
    | BabelNodeClassPrivateProperty
    | BabelNodeTSDeclareMethod
    | BabelNodeTSIndexSignature,
  >;
}

declare class BabelNodeClassExpression extends BabelNode {
  type: 'ClassExpression';
  id?: BabelNodeIdentifier;
  superClass?: BabelNodeExpression;
  body: BabelNodeClassBody;
  decorators?: $ReadOnlyArray<BabelNodeDecorator>;
  mixins: any;
  superTypeParameters?:
    | BabelNodeTypeParameterInstantiation
    | BabelNodeTSTypeParameterInstantiation;
  typeParameters?:
    | BabelNodeTypeParameterDeclaration
    | BabelNodeTSTypeParameterDeclaration
    | BabelNodeNoop;
}

declare class BabelNodeClassDeclaration extends BabelNode {
  type: 'ClassDeclaration';
  id: any;
  superClass: any;
  body: any;
  decorators: any;
  abstract?: boolean;
  declare?: boolean;
  mixins: any;
  superTypeParameters: any;
  typeParameters: any;
}

declare class BabelNodeExportAllDeclaration extends BabelNode {
  type: 'ExportAllDeclaration';
  source: BabelNodeStringLiteral;
}

declare class BabelNodeExportDefaultDeclaration extends BabelNode {
  type: 'ExportDefaultDeclaration';
  declaration:
    | BabelNodeFunctionDeclaration
    | BabelNodeTSDeclareFunction
    | BabelNodeClassDeclaration
    | BabelNodeExpression;
}

declare class BabelNodeExportNamedDeclaration extends BabelNode {
  type: 'ExportNamedDeclaration';
  declaration?: any;
  specifiers?: $ReadOnlyArray<
    | BabelNodeExportSpecifier
    | BabelNodeExportDefaultSpecifier
    | BabelNodeExportNamespaceSpecifier,
  >;
  source?: BabelNodeStringLiteral;
  exportKind?: 'type' | 'value';
}

declare class BabelNodeExportSpecifier extends BabelNode {
  type: 'ExportSpecifier';
  local: BabelNodeIdentifier;
  exported: BabelNodeIdentifier;
}

declare class BabelNodeForOfStatement extends BabelNode {
  type: 'ForOfStatement';
  left: BabelNodeVariableDeclaration | BabelNodeLVal;
  right: BabelNodeExpression;
  body: BabelNodeStatement;
}

declare class BabelNodeImportDeclaration extends BabelNode {
  type: 'ImportDeclaration';
  specifiers: $ReadOnlyArray<
    | BabelNodeImportSpecifier
    | BabelNodeImportDefaultSpecifier
    | BabelNodeImportNamespaceSpecifier,
  >;
  source: BabelNodeStringLiteral;
  importKind?: 'type' | 'typeof' | 'value';
}

declare class BabelNodeImportDefaultSpecifier extends BabelNode {
  type: 'ImportDefaultSpecifier';
  local: BabelNodeIdentifier;
}

declare class BabelNodeImportNamespaceSpecifier extends BabelNode {
  type: 'ImportNamespaceSpecifier';
  local: BabelNodeIdentifier;
}

declare class BabelNodeImportSpecifier extends BabelNode {
  type: 'ImportSpecifier';
  local: BabelNodeIdentifier;
  imported: BabelNodeIdentifier;
  importKind?: 'type' | 'typeof';
}

declare class BabelNodeMetaProperty extends BabelNode {
  type: 'MetaProperty';
  meta: any;
  property: BabelNodeIdentifier;
}

declare class BabelNodeClassMethod extends BabelNode {
  type: 'ClassMethod';
  kind?: 'get' | 'set' | 'method' | 'constructor';
  key:
    | BabelNodeIdentifier
    | BabelNodeStringLiteral
    | BabelNodeNumericLiteral
    | BabelNodeExpression;
  params: $ReadOnlyArray<
    | BabelNodeIdentifier
    | BabelNodePattern
    | BabelNodeRestElement
    | BabelNodeTSParameterProperty,
  >;
  body: BabelNodeBlockStatement;
  computed?: boolean;
  generator?: boolean;
  async?: boolean;
  abstract?: boolean;
  access?: 'public' | 'private' | 'protected';
  accessibility?: 'public' | 'private' | 'protected';
  decorators?: $ReadOnlyArray<BabelNodeDecorator>;
  optional?: boolean;
  returnType?:
    | BabelNodeTypeAnnotation
    | BabelNodeTSTypeAnnotation
    | BabelNodeNoop;
  typeParameters?:
    | BabelNodeTypeParameterDeclaration
    | BabelNodeTSTypeParameterDeclaration
    | BabelNodeNoop;
}

declare class BabelNodeObjectPattern extends BabelNode {
  type: 'ObjectPattern';
  properties: $ReadOnlyArray<BabelNodeRestElement | BabelNodeObjectProperty>;
  decorators?: $ReadOnlyArray<BabelNodeDecorator>;
  typeAnnotation?:
    | BabelNodeTypeAnnotation
    | BabelNodeTSTypeAnnotation
    | BabelNodeNoop;
}

declare class BabelNodeSpreadElement extends BabelNode {
  type: 'SpreadElement';
  argument: BabelNodeExpression;
}

declare class BabelNodeSuper extends BabelNode {
  type: 'Super';
}

declare class BabelNodeTaggedTemplateExpression extends BabelNode {
  type: 'TaggedTemplateExpression';
  tag: BabelNodeExpression;
  quasi: BabelNodeTemplateLiteral;
  typeParameters?:
    | BabelNodeTypeParameterInstantiation
    | BabelNodeTSTypeParameterInstantiation;
}

declare class BabelNodeTemplateElement extends BabelNode {
  type: 'TemplateElement';
  value: {raw: string, cooked?: string};
  tail?: boolean;
}

declare class BabelNodeTemplateLiteral extends BabelNode {
  type: 'TemplateLiteral';
  quasis: $ReadOnlyArray<BabelNodeTemplateElement>;
  expressions: $ReadOnlyArray<BabelNodeExpression>;
}

declare class BabelNodeYieldExpression extends BabelNode {
  type: 'YieldExpression';
  argument?: BabelNodeExpression;
  delegate?: any;
}

declare class BabelNodeAnyTypeAnnotation extends BabelNode {
  type: 'AnyTypeAnnotation';
}

declare class BabelNodeArrayTypeAnnotation extends BabelNode {
  type: 'ArrayTypeAnnotation';
  elementType: BabelNodeFlowType;
}

declare class BabelNodeBooleanTypeAnnotation extends BabelNode {
  type: 'BooleanTypeAnnotation';
}

declare class BabelNodeBooleanLiteralTypeAnnotation extends BabelNode {
  type: 'BooleanLiteralTypeAnnotation';
  value: boolean;
}

declare class BabelNodeNullLiteralTypeAnnotation extends BabelNode {
  type: 'NullLiteralTypeAnnotation';
}

declare class BabelNodeClassImplements extends BabelNode {
  type: 'ClassImplements';
  id: BabelNodeIdentifier;
  typeParameters?: BabelNodeTypeParameterInstantiation;
}

declare class BabelNodeDeclareClass extends BabelNode {
  type: 'DeclareClass';
  id: BabelNodeIdentifier;
  typeParameters?: BabelNodeTypeParameterDeclaration;
  body: BabelNodeObjectTypeAnnotation;
  mixins?: $ReadOnlyArray<BabelNodeInterfaceExtends>;
}

declare class BabelNodeDeclareFunction extends BabelNode {
  type: 'DeclareFunction';
  id: BabelNodeIdentifier;
  predicate?: BabelNodeDeclaredPredicate;
}

declare class BabelNodeDeclareInterface extends BabelNode {
  type: 'DeclareInterface';
  id: BabelNodeIdentifier;
  typeParameters?: BabelNodeTypeParameterDeclaration;
  body: BabelNodeObjectTypeAnnotation;
  mixins?: $ReadOnlyArray<BabelNodeInterfaceExtends>;
}

declare class BabelNodeDeclareModule extends BabelNode {
  type: 'DeclareModule';
  id: BabelNodeIdentifier | BabelNodeStringLiteral;
  body: BabelNodeBlockStatement;
  kind?: 'CommonJS' | 'ES';
}

declare class BabelNodeDeclareModuleExports extends BabelNode {
  type: 'DeclareModuleExports';
  typeAnnotation: BabelNodeTypeAnnotation;
}

declare class BabelNodeDeclareTypeAlias extends BabelNode {
  type: 'DeclareTypeAlias';
  id: BabelNodeIdentifier;
  typeParameters?: BabelNodeTypeParameterDeclaration;
  right: BabelNodeFlowType;
}

declare class BabelNodeDeclareOpaqueType extends BabelNode {
  type: 'DeclareOpaqueType';
  id: BabelNodeIdentifier;
  typeParameters?: BabelNodeTypeParameterDeclaration;
  supertype?: BabelNodeFlowType;
}

declare class BabelNodeDeclareVariable extends BabelNode {
  type: 'DeclareVariable';
  id: BabelNodeIdentifier;
}

declare class BabelNodeDeclareExportDeclaration extends BabelNode {
  type: 'DeclareExportDeclaration';
  declaration?: BabelNodeFlow;
  specifiers?: $ReadOnlyArray<
    BabelNodeExportSpecifier | BabelNodeExportNamespaceSpecifier,
  >;
  source?: BabelNodeStringLiteral;
}

declare class BabelNodeDeclareExportAllDeclaration extends BabelNode {
  type: 'DeclareExportAllDeclaration';
  source: BabelNodeStringLiteral;
  exportKind?: 'type' | 'value';
}

declare class BabelNodeDeclaredPredicate extends BabelNode {
  type: 'DeclaredPredicate';
  value: BabelNodeFlow;
}

declare class BabelNodeExistsTypeAnnotation extends BabelNode {
  type: 'ExistsTypeAnnotation';
}

declare class BabelNodeFunctionTypeAnnotation extends BabelNode {
  type: 'FunctionTypeAnnotation';
  typeParameters?: BabelNodeTypeParameterDeclaration;
  params: $ReadOnlyArray<BabelNodeFunctionTypeParam>;
  rest?: BabelNodeFunctionTypeParam;
  returnType: BabelNodeFlowType;
}

declare class BabelNodeFunctionTypeParam extends BabelNode {
  type: 'FunctionTypeParam';
  name?: BabelNodeIdentifier;
  typeAnnotation: BabelNodeFlowType;
  optional?: boolean;
}

declare class BabelNodeGenericTypeAnnotation extends BabelNode {
  type: 'GenericTypeAnnotation';
  id: BabelNodeIdentifier | BabelNodeQualifiedTypeIdentifier;
  typeParameters?: BabelNodeTypeParameterInstantiation;
}

declare class BabelNodeInferredPredicate extends BabelNode {
  type: 'InferredPredicate';
}

declare class BabelNodeInterfaceExtends extends BabelNode {
  type: 'InterfaceExtends';
  id: BabelNodeIdentifier | BabelNodeQualifiedTypeIdentifier;
  typeParameters?: BabelNodeTypeParameterInstantiation;
}

declare class BabelNodeInterfaceDeclaration extends BabelNode {
  type: 'InterfaceDeclaration';
  id: BabelNodeIdentifier;
  typeParameters?: BabelNodeTypeParameterDeclaration;
  body: BabelNodeObjectTypeAnnotation;
  mixins?: $ReadOnlyArray<BabelNodeInterfaceExtends>;
}

declare class BabelNodeInterfaceTypeAnnotation extends BabelNode {
  type: 'InterfaceTypeAnnotation';
  body: BabelNodeObjectTypeAnnotation;
}

declare class BabelNodeIntersectionTypeAnnotation extends BabelNode {
  type: 'IntersectionTypeAnnotation';
  types: $ReadOnlyArray<BabelNodeFlowType>;
}

declare class BabelNodeMixedTypeAnnotation extends BabelNode {
  type: 'MixedTypeAnnotation';
}

declare class BabelNodeEmptyTypeAnnotation extends BabelNode {
  type: 'EmptyTypeAnnotation';
}

declare class BabelNodeNullableTypeAnnotation extends BabelNode {
  type: 'NullableTypeAnnotation';
  typeAnnotation: BabelNodeFlowType;
}

declare class BabelNodeNumberLiteralTypeAnnotation extends BabelNode {
  type: 'NumberLiteralTypeAnnotation';
  value: number;
}

declare class BabelNodeNumberTypeAnnotation extends BabelNode {
  type: 'NumberTypeAnnotation';
}

declare class BabelNodeObjectTypeAnnotation extends BabelNode {
  type: 'ObjectTypeAnnotation';
  properties: $ReadOnlyArray<
    BabelNodeObjectTypeProperty | BabelNodeObjectTypeSpreadProperty,
  >;
  indexers?: $ReadOnlyArray<BabelNodeObjectTypeIndexer>;
  callProperties?: $ReadOnlyArray<BabelNodeObjectTypeCallProperty>;
  internalSlots?: $ReadOnlyArray<BabelNodeObjectTypeInternalSlot>;
  exact?: boolean;
  inexact?: boolean;
}

declare class BabelNodeObjectTypeInternalSlot extends BabelNode {
  type: 'ObjectTypeInternalSlot';
  id: BabelNodeIdentifier;
  value: BabelNodeFlowType;
  optional: boolean;
  method: boolean;
}

declare class BabelNodeObjectTypeCallProperty extends BabelNode {
  type: 'ObjectTypeCallProperty';
  value: BabelNodeFlowType;
}

declare class BabelNodeObjectTypeIndexer extends BabelNode {
  type: 'ObjectTypeIndexer';
  id?: BabelNodeIdentifier;
  key: BabelNodeFlowType;
  value: BabelNodeFlowType;
  variance?: BabelNodeVariance;
}

declare class BabelNodeObjectTypeProperty extends BabelNode {
  type: 'ObjectTypeProperty';
  key: BabelNodeIdentifier | BabelNodeStringLiteral;
  value: BabelNodeFlowType;
  variance?: BabelNodeVariance;
  kind: 'init' | 'get' | 'set';
  optional: boolean;
  proto: boolean;
}

declare class BabelNodeObjectTypeSpreadProperty extends BabelNode {
  type: 'ObjectTypeSpreadProperty';
  argument: BabelNodeFlowType;
}

declare class BabelNodeOpaqueType extends BabelNode {
  type: 'OpaqueType';
  id: BabelNodeIdentifier;
  typeParameters?: BabelNodeTypeParameterDeclaration;
  supertype?: BabelNodeFlowType;
  impltype: BabelNodeFlowType;
}

declare class BabelNodeQualifiedTypeIdentifier extends BabelNode {
  type: 'QualifiedTypeIdentifier';
  id: BabelNodeIdentifier;
  qualification: BabelNodeIdentifier | BabelNodeQualifiedTypeIdentifier;
}

declare class BabelNodeStringLiteralTypeAnnotation extends BabelNode {
  type: 'StringLiteralTypeAnnotation';
  value: string;
}

declare class BabelNodeStringTypeAnnotation extends BabelNode {
  type: 'StringTypeAnnotation';
}

declare class BabelNodeSymbolTypeAnnotation extends BabelNode {
  type: 'SymbolTypeAnnotation';
}

declare class BabelNodeThisTypeAnnotation extends BabelNode {
  type: 'ThisTypeAnnotation';
}

declare class BabelNodeTupleTypeAnnotation extends BabelNode {
  type: 'TupleTypeAnnotation';
  types: $ReadOnlyArray<BabelNodeFlowType>;
}

declare class BabelNodeTypeofTypeAnnotation extends BabelNode {
  type: 'TypeofTypeAnnotation';
  argument: BabelNodeFlowType;
}

declare class BabelNodeTypeAlias extends BabelNode {
  type: 'TypeAlias';
  id: BabelNodeIdentifier;
  typeParameters?: BabelNodeTypeParameterDeclaration;
  right: BabelNodeFlowType;
}

declare class BabelNodeTypeAnnotation extends BabelNode {
  type: 'TypeAnnotation';
  typeAnnotation: BabelNodeFlowType;
}

declare class BabelNodeTypeCastExpression extends BabelNode {
  type: 'TypeCastExpression';
  expression: BabelNodeExpression;
  typeAnnotation: BabelNodeTypeAnnotation;
}

declare class BabelNodeTypeParameter extends BabelNode {
  type: 'TypeParameter';
  bound?: BabelNodeTypeAnnotation;
  variance?: BabelNodeVariance;
  name: string;
}

declare class BabelNodeTypeParameterDeclaration extends BabelNode {
  type: 'TypeParameterDeclaration';
  params: $ReadOnlyArray<BabelNodeTypeParameter>;
}

declare class BabelNodeTypeParameterInstantiation extends BabelNode {
  type: 'TypeParameterInstantiation';
  params: $ReadOnlyArray<BabelNodeFlowType>;
}

declare class BabelNodeUnionTypeAnnotation extends BabelNode {
  type: 'UnionTypeAnnotation';
  types: $ReadOnlyArray<BabelNodeFlowType>;
}

declare class BabelNodeVariance extends BabelNode {
  type: 'Variance';
  kind: 'minus' | 'plus';
}

declare class BabelNodeVoidTypeAnnotation extends BabelNode {
  type: 'VoidTypeAnnotation';
}

declare class BabelNodeEnumDeclaration extends BabelNode {
  type: 'EnumDeclaration';
  id: BabelNodeIdentifier;
  body:
    | BabelNodeEnumBooleanBody
    | BabelNodeEnumNumberBody
    | BabelNodeEnumStringBody
    | BabelNodeEnumSymbolBody;
}

declare class BabelNodeEnumBooleanBody extends BabelNode {
  type: 'EnumBooleanBody';
  members: $ReadOnlyArray<BabelNodeEnumBooleanMember>;
  explicit: boolean;
}

declare class BabelNodeEnumNumberBody extends BabelNode {
  type: 'EnumNumberBody';
  members: $ReadOnlyArray<BabelNodeEnumNumberMember>;
  explicit: boolean;
}

declare class BabelNodeEnumStringBody extends BabelNode {
  type: 'EnumStringBody';
  members: $ReadOnlyArray<
    BabelNodeEnumStringMember | BabelNodeEnumDefaultedMember,
  >;
  explicit: boolean;
}

declare class BabelNodeEnumSymbolBody extends BabelNode {
  type: 'EnumSymbolBody';
  members: $ReadOnlyArray<BabelNodeEnumDefaultedMember>;
}

declare class BabelNodeEnumBooleanMember extends BabelNode {
  type: 'EnumBooleanMember';
  id: BabelNodeIdentifier;
  init: BabelNodeBooleanLiteral;
}

declare class BabelNodeEnumNumberMember extends BabelNode {
  type: 'EnumNumberMember';
  id: BabelNodeIdentifier;
  init: BabelNodeNumericLiteral;
}

declare class BabelNodeEnumStringMember extends BabelNode {
  type: 'EnumStringMember';
  id: BabelNodeIdentifier;
  init: BabelNodeStringLiteral;
}

declare class BabelNodeEnumDefaultedMember extends BabelNode {
  type: 'EnumDefaultedMember';
  id: BabelNodeIdentifier;
}

declare class BabelNodeJSXAttribute extends BabelNode {
  type: 'JSXAttribute';
  name: BabelNodeJSXIdentifier | BabelNodeJSXNamespacedName;
  value?:
    | BabelNodeJSXElement
    | BabelNodeJSXFragment
    | BabelNodeStringLiteral
    | BabelNodeJSXExpressionContainer;
}

declare class BabelNodeJSXClosingElement extends BabelNode {
  type: 'JSXClosingElement';
  name:
    | BabelNodeJSXIdentifier
    | BabelNodeJSXMemberExpression
    | BabelNodeJSXNamespacedName;
}

declare class BabelNodeJSXElement extends BabelNode {
  type: 'JSXElement';
  openingElement: BabelNodeJSXOpeningElement;
  closingElement?: BabelNodeJSXClosingElement;
  children: $ReadOnlyArray<
    | BabelNodeJSXText
    | BabelNodeJSXExpressionContainer
    | BabelNodeJSXSpreadChild
    | BabelNodeJSXElement
    | BabelNodeJSXFragment,
  >;
  selfClosing: any;
}

declare class BabelNodeJSXEmptyExpression extends BabelNode {
  type: 'JSXEmptyExpression';
}

declare class BabelNodeJSXExpressionContainer extends BabelNode {
  type: 'JSXExpressionContainer';
  expression: BabelNodeExpression | BabelNodeJSXEmptyExpression;
}

declare class BabelNodeJSXSpreadChild extends BabelNode {
  type: 'JSXSpreadChild';
  expression: BabelNodeExpression;
}

declare class BabelNodeJSXIdentifier extends BabelNode {
  type: 'JSXIdentifier';
  name: string;
}

declare class BabelNodeJSXMemberExpression extends BabelNode {
  type: 'JSXMemberExpression';
  object: BabelNodeJSXMemberExpression | BabelNodeJSXIdentifier;
  property: BabelNodeJSXIdentifier;
}

declare class BabelNodeJSXNamespacedName extends BabelNode {
  type: 'JSXNamespacedName';
  namespace: BabelNodeJSXIdentifier;
  name: BabelNodeJSXIdentifier;
}

declare class BabelNodeJSXOpeningElement extends BabelNode {
  type: 'JSXOpeningElement';
  name:
    | BabelNodeJSXIdentifier
    | BabelNodeJSXMemberExpression
    | BabelNodeJSXNamespacedName;
  attributes: $ReadOnlyArray<
    BabelNodeJSXAttribute | BabelNodeJSXSpreadAttribute,
  >;
  selfClosing?: boolean;
  typeParameters?:
    | BabelNodeTypeParameterInstantiation
    | BabelNodeTSTypeParameterInstantiation;
}

declare class BabelNodeJSXSpreadAttribute extends BabelNode {
  type: 'JSXSpreadAttribute';
  argument: BabelNodeExpression;
}

declare class BabelNodeJSXText extends BabelNode {
  type: 'JSXText';
  value: string;
}

declare class BabelNodeJSXFragment extends BabelNode {
  type: 'JSXFragment';
  openingFragment: BabelNodeJSXOpeningFragment;
  closingFragment: BabelNodeJSXClosingFragment;
  children: $ReadOnlyArray<
    | BabelNodeJSXText
    | BabelNodeJSXExpressionContainer
    | BabelNodeJSXSpreadChild
    | BabelNodeJSXElement
    | BabelNodeJSXFragment,
  >;
}

declare class BabelNodeJSXOpeningFragment extends BabelNode {
  type: 'JSXOpeningFragment';
}

declare class BabelNodeJSXClosingFragment extends BabelNode {
  type: 'JSXClosingFragment';
}

declare class BabelNodeNoop extends BabelNode {
  type: 'Noop';
}

declare class BabelNodePlaceholder extends BabelNode {
  type: 'Placeholder';
  expectedNode:
    | 'Identifier'
    | 'StringLiteral'
    | 'Expression'
    | 'Statement'
    | 'Declaration'
    | 'BlockStatement'
    | 'ClassBody'
    | 'Pattern';
  name: BabelNodeIdentifier;
}

declare class BabelNodeV8IntrinsicIdentifier extends BabelNode {
  type: 'V8IntrinsicIdentifier';
  name: string;
}

declare class BabelNodeArgumentPlaceholder extends BabelNode {
  type: 'ArgumentPlaceholder';
}

declare class BabelNodeAwaitExpression extends BabelNode {
  type: 'AwaitExpression';
  argument: BabelNodeExpression;
}

declare class BabelNodeBindExpression extends BabelNode {
  type: 'BindExpression';
  object: any;
  callee: any;
}

declare class BabelNodeClassProperty extends BabelNode {
  type: 'ClassProperty';
  key:
    | BabelNodeIdentifier
    | BabelNodeStringLiteral
    | BabelNodeNumericLiteral
    | BabelNodeExpression;
  value?: BabelNodeExpression;
  typeAnnotation?:
    | BabelNodeTypeAnnotation
    | BabelNodeTSTypeAnnotation
    | BabelNodeNoop;
  decorators?: $ReadOnlyArray<BabelNodeDecorator>;
  computed?: boolean;
  abstract?: boolean;
  accessibility?: 'public' | 'private' | 'protected';
  declare?: boolean;
  definite?: boolean;
  optional?: boolean;
  readonly?: boolean;
}

declare class BabelNodeOptionalMemberExpression extends BabelNode {
  type: 'OptionalMemberExpression';
  object: BabelNodeExpression;
  property: any;
  computed?: boolean;
  optional: boolean;
}

declare class BabelNodePipelineTopicExpression extends BabelNode {
  type: 'PipelineTopicExpression';
  expression: BabelNodeExpression;
}

declare class BabelNodePipelineBareFunction extends BabelNode {
  type: 'PipelineBareFunction';
  callee: BabelNodeExpression;
}

declare class BabelNodePipelinePrimaryTopicReference extends BabelNode {
  type: 'PipelinePrimaryTopicReference';
}

declare class BabelNodeOptionalCallExpression extends BabelNode {
  type: 'OptionalCallExpression';
  callee: BabelNodeExpression;
  arguments: $ReadOnlyArray<
    BabelNodeExpression | BabelNodeSpreadElement | BabelNodeJSXNamespacedName,
  >;
  optional: boolean;
  typeArguments?: BabelNodeTypeParameterInstantiation;
  typeParameters?: BabelNodeTSTypeParameterInstantiation;
}

declare class BabelNodeClassPrivateProperty extends BabelNode {
  type: 'ClassPrivateProperty';
  key: BabelNodePrivateName;
  value?: BabelNodeExpression;
  decorators?: $ReadOnlyArray<BabelNodeDecorator>;
}

declare class BabelNodeClassPrivateMethod extends BabelNode {
  type: 'ClassPrivateMethod';
  kind?: 'get' | 'set' | 'method' | 'constructor';
  key: BabelNodePrivateName;
  params: $ReadOnlyArray<
    | BabelNodeIdentifier
    | BabelNodePattern
    | BabelNodeRestElement
    | BabelNodeTSParameterProperty,
  >;
  body: BabelNodeBlockStatement;
  abstract?: boolean;
  access?: 'public' | 'private' | 'protected';
  accessibility?: 'public' | 'private' | 'protected';
  async?: boolean;
  computed?: boolean;
  decorators?: $ReadOnlyArray<BabelNodeDecorator>;
  generator?: boolean;
  optional?: boolean;
  returnType: any;
  typeParameters: any;
}

declare class BabelNodeImport extends BabelNode {
  type: 'Import';
}

declare class BabelNodeImportAttribute extends BabelNode {
  type: 'ImportAttribute';
  key: any;
  value: any;
}

declare class BabelNodeDecorator extends BabelNode {
  type: 'Decorator';
  expression: BabelNodeExpression;
}

declare class BabelNodeDoExpression extends BabelNode {
  type: 'DoExpression';
  body: BabelNodeBlockStatement;
}

declare class BabelNodeExportDefaultSpecifier extends BabelNode {
  type: 'ExportDefaultSpecifier';
  exported: BabelNodeIdentifier;
}

declare class BabelNodeExportNamespaceSpecifier extends BabelNode {
  type: 'ExportNamespaceSpecifier';
  exported: BabelNodeIdentifier;
}

declare class BabelNodePrivateName extends BabelNode {
  type: 'PrivateName';
  id: BabelNodeIdentifier;
}

declare class BabelNodeBigIntLiteral extends BabelNode {
  type: 'BigIntLiteral';
  value: string;
}

declare class BabelNodeRecordExpression extends BabelNode {
  type: 'RecordExpression';
  properties: $ReadOnlyArray<
    BabelNodeObjectProperty | BabelNodeObjectMethod | BabelNodeSpreadElement,
  >;
}

declare class BabelNodeTupleExpression extends BabelNode {
  type: 'TupleExpression';
  elements?: $ReadOnlyArray<
    null | BabelNodeExpression | BabelNodeSpreadElement,
  >;
}

declare class BabelNodeTSParameterProperty extends BabelNode {
  type: 'TSParameterProperty';
  parameter: BabelNodeIdentifier | BabelNodeAssignmentPattern;
  accessibility?: 'public' | 'private' | 'protected';
  readonly?: boolean;
}

declare class BabelNodeTSDeclareFunction extends BabelNode {
  type: 'TSDeclareFunction';
  id?: BabelNodeIdentifier;
  typeParameters?: BabelNodeTSTypeParameterDeclaration | BabelNodeNoop;
  params: $ReadOnlyArray<
    | BabelNodeIdentifier
    | BabelNodePattern
    | BabelNodeRestElement
    | BabelNodeTSParameterProperty,
  >;
  returnType?: BabelNodeTSTypeAnnotation | BabelNodeNoop;
  async?: boolean;
  declare?: boolean;
  generator?: boolean;
}

declare class BabelNodeTSDeclareMethod extends BabelNode {
  type: 'TSDeclareMethod';
  decorators?: $ReadOnlyArray<BabelNodeDecorator>;
  key:
    | BabelNodeIdentifier
    | BabelNodeStringLiteral
    | BabelNodeNumericLiteral
    | BabelNodeExpression;
  typeParameters?: BabelNodeTSTypeParameterDeclaration | BabelNodeNoop;
  params: $ReadOnlyArray<
    | BabelNodeIdentifier
    | BabelNodePattern
    | BabelNodeRestElement
    | BabelNodeTSParameterProperty,
  >;
  returnType?: BabelNodeTSTypeAnnotation | BabelNodeNoop;
  abstract?: boolean;
  access?: 'public' | 'private' | 'protected';
  accessibility?: 'public' | 'private' | 'protected';
  async?: boolean;
  computed?: boolean;
  generator?: boolean;
  kind?: 'get' | 'set' | 'method' | 'constructor';
  optional?: boolean;
}

declare class BabelNodeTSQualifiedName extends BabelNode {
  type: 'TSQualifiedName';
  left: BabelNodeTSEntityName;
  right: BabelNodeIdentifier;
}

declare class BabelNodeTSCallSignatureDeclaration extends BabelNode {
  type: 'TSCallSignatureDeclaration';
  typeParameters?: BabelNodeTSTypeParameterDeclaration;
  parameters: $ReadOnlyArray<BabelNodeIdentifier | BabelNodeRestElement>;
  typeAnnotation?: BabelNodeTSTypeAnnotation;
}

declare class BabelNodeTSConstructSignatureDeclaration extends BabelNode {
  type: 'TSConstructSignatureDeclaration';
  typeParameters?: BabelNodeTSTypeParameterDeclaration;
  parameters: $ReadOnlyArray<BabelNodeIdentifier | BabelNodeRestElement>;
  typeAnnotation?: BabelNodeTSTypeAnnotation;
}

declare class BabelNodeTSPropertySignature extends BabelNode {
  type: 'TSPropertySignature';
  key: BabelNodeExpression;
  typeAnnotation?: BabelNodeTSTypeAnnotation;
  initializer?: BabelNodeExpression;
  computed?: boolean;
  optional?: boolean;
  readonly?: boolean;
}

declare class BabelNodeTSMethodSignature extends BabelNode {
  type: 'TSMethodSignature';
  key: BabelNodeExpression;
  typeParameters?: BabelNodeTSTypeParameterDeclaration;
  parameters: $ReadOnlyArray<BabelNodeIdentifier | BabelNodeRestElement>;
  typeAnnotation?: BabelNodeTSTypeAnnotation;
  computed?: boolean;
  optional?: boolean;
}

declare class BabelNodeTSIndexSignature extends BabelNode {
  type: 'TSIndexSignature';
  parameters: $ReadOnlyArray<BabelNodeIdentifier>;
  typeAnnotation?: BabelNodeTSTypeAnnotation;
  readonly?: boolean;
}

declare class BabelNodeTSAnyKeyword extends BabelNode {
  type: 'TSAnyKeyword';
}

declare class BabelNodeTSBooleanKeyword extends BabelNode {
  type: 'TSBooleanKeyword';
}

declare class BabelNodeTSBigIntKeyword extends BabelNode {
  type: 'TSBigIntKeyword';
}

declare class BabelNodeTSNeverKeyword extends BabelNode {
  type: 'TSNeverKeyword';
}

declare class BabelNodeTSNullKeyword extends BabelNode {
  type: 'TSNullKeyword';
}

declare class BabelNodeTSNumberKeyword extends BabelNode {
  type: 'TSNumberKeyword';
}

declare class BabelNodeTSObjectKeyword extends BabelNode {
  type: 'TSObjectKeyword';
}

declare class BabelNodeTSStringKeyword extends BabelNode {
  type: 'TSStringKeyword';
}

declare class BabelNodeTSSymbolKeyword extends BabelNode {
  type: 'TSSymbolKeyword';
}

declare class BabelNodeTSUndefinedKeyword extends BabelNode {
  type: 'TSUndefinedKeyword';
}

declare class BabelNodeTSUnknownKeyword extends BabelNode {
  type: 'TSUnknownKeyword';
}

declare class BabelNodeTSVoidKeyword extends BabelNode {
  type: 'TSVoidKeyword';
}

declare class BabelNodeTSThisType extends BabelNode {
  type: 'TSThisType';
}

declare class BabelNodeTSFunctionType extends BabelNode {
  type: 'TSFunctionType';
  typeParameters?: BabelNodeTSTypeParameterDeclaration;
  parameters: $ReadOnlyArray<BabelNodeIdentifier | BabelNodeRestElement>;
  typeAnnotation?: BabelNodeTSTypeAnnotation;
}

declare class BabelNodeTSConstructorType extends BabelNode {
  type: 'TSConstructorType';
  typeParameters?: BabelNodeTSTypeParameterDeclaration;
  parameters: $ReadOnlyArray<BabelNodeIdentifier | BabelNodeRestElement>;
  typeAnnotation?: BabelNodeTSTypeAnnotation;
}

declare class BabelNodeTSTypeReference extends BabelNode {
  type: 'TSTypeReference';
  typeName: BabelNodeTSEntityName;
  typeParameters?: BabelNodeTSTypeParameterInstantiation;
}

declare class BabelNodeTSTypePredicate extends BabelNode {
  type: 'TSTypePredicate';
  parameterName: BabelNodeIdentifier | BabelNodeTSThisType;
  typeAnnotation?: BabelNodeTSTypeAnnotation;
  asserts?: boolean;
}

declare class BabelNodeTSTypeQuery extends BabelNode {
  type: 'TSTypeQuery';
  exprName: BabelNodeTSEntityName | BabelNodeTSImportType;
}

declare class BabelNodeTSTypeLiteral extends BabelNode {
  type: 'TSTypeLiteral';
  members: $ReadOnlyArray<BabelNodeTSTypeElement>;
}

declare class BabelNodeTSArrayType extends BabelNode {
  type: 'TSArrayType';
  elementType: BabelNodeTSType;
}

declare class BabelNodeTSTupleType extends BabelNode {
  type: 'TSTupleType';
  elementTypes: $ReadOnlyArray<BabelNodeTSType>;
}

declare class BabelNodeTSOptionalType extends BabelNode {
  type: 'TSOptionalType';
  typeAnnotation: BabelNodeTSType;
}

declare class BabelNodeTSRestType extends BabelNode {
  type: 'TSRestType';
  typeAnnotation: BabelNodeTSType;
}

declare class BabelNodeTSUnionType extends BabelNode {
  type: 'TSUnionType';
  types: $ReadOnlyArray<BabelNodeTSType>;
}

declare class BabelNodeTSIntersectionType extends BabelNode {
  type: 'TSIntersectionType';
  types: $ReadOnlyArray<BabelNodeTSType>;
}

declare class BabelNodeTSConditionalType extends BabelNode {
  type: 'TSConditionalType';
  checkType: BabelNodeTSType;
  extendsType: BabelNodeTSType;
  trueType: BabelNodeTSType;
  falseType: BabelNodeTSType;
}

declare class BabelNodeTSInferType extends BabelNode {
  type: 'TSInferType';
  typeParameter: BabelNodeTSTypeParameter;
}

declare class BabelNodeTSParenthesizedType extends BabelNode {
  type: 'TSParenthesizedType';
  typeAnnotation: BabelNodeTSType;
}

declare class BabelNodeTSTypeOperator extends BabelNode {
  type: 'TSTypeOperator';
  typeAnnotation: BabelNodeTSType;
  operator: string;
}

declare class BabelNodeTSIndexedAccessType extends BabelNode {
  type: 'TSIndexedAccessType';
  objectType: BabelNodeTSType;
  indexType: BabelNodeTSType;
}

declare class BabelNodeTSMappedType extends BabelNode {
  type: 'TSMappedType';
  typeParameter: BabelNodeTSTypeParameter;
  typeAnnotation?: BabelNodeTSType;
  optional?: boolean;
  readonly?: boolean;
}

declare class BabelNodeTSLiteralType extends BabelNode {
  type: 'TSLiteralType';
  literal:
    | BabelNodeNumericLiteral
    | BabelNodeStringLiteral
    | BabelNodeBooleanLiteral
    | BabelNodeBigIntLiteral;
}

declare class BabelNodeTSExpressionWithTypeArguments extends BabelNode {
  type: 'TSExpressionWithTypeArguments';
  expression: BabelNodeTSEntityName;
  typeParameters?: BabelNodeTSTypeParameterInstantiation;
}

declare class BabelNodeTSInterfaceDeclaration extends BabelNode {
  type: 'TSInterfaceDeclaration';
  id: BabelNodeIdentifier;
  typeParameters?: BabelNodeTSTypeParameterDeclaration;
  body: BabelNodeTSInterfaceBody;
  declare?: boolean;
}

declare class BabelNodeTSInterfaceBody extends BabelNode {
  type: 'TSInterfaceBody';
  body: $ReadOnlyArray<BabelNodeTSTypeElement>;
}

declare class BabelNodeTSTypeAliasDeclaration extends BabelNode {
  type: 'TSTypeAliasDeclaration';
  id: BabelNodeIdentifier;
  typeParameters?: BabelNodeTSTypeParameterDeclaration;
  typeAnnotation: BabelNodeTSType;
  declare?: boolean;
}

declare class BabelNodeTSAsExpression extends BabelNode {
  type: 'TSAsExpression';
  expression: BabelNodeExpression;
  typeAnnotation: BabelNodeTSType;
}

declare class BabelNodeTSTypeAssertion extends BabelNode {
  type: 'TSTypeAssertion';
  typeAnnotation: BabelNodeTSType;
  expression: BabelNodeExpression;
}

declare class BabelNodeTSEnumDeclaration extends BabelNode {
  type: 'TSEnumDeclaration';
  id: BabelNodeIdentifier;
  members: $ReadOnlyArray<BabelNodeTSEnumMember>;
  declare?: boolean;
  initializer?: BabelNodeExpression;
}

declare class BabelNodeTSEnumMember extends BabelNode {
  type: 'TSEnumMember';
  id: BabelNodeIdentifier | BabelNodeStringLiteral;
  initializer?: BabelNodeExpression;
}

declare class BabelNodeTSModuleDeclaration extends BabelNode {
  type: 'TSModuleDeclaration';
  id: BabelNodeIdentifier | BabelNodeStringLiteral;
  body: BabelNodeTSModuleBlock | BabelNodeTSModuleDeclaration;
  declare?: boolean;
  global?: boolean;
}

declare class BabelNodeTSModuleBlock extends BabelNode {
  type: 'TSModuleBlock';
  body: $ReadOnlyArray<BabelNodeStatement>;
}

declare class BabelNodeTSImportType extends BabelNode {
  type: 'TSImportType';
  argument: BabelNodeStringLiteral;
  qualifier?: BabelNodeTSEntityName;
  typeParameters?: BabelNodeTSTypeParameterInstantiation;
}

declare class BabelNodeTSImportEqualsDeclaration extends BabelNode {
  type: 'TSImportEqualsDeclaration';
  id: BabelNodeIdentifier;
  moduleReference: BabelNodeTSEntityName | BabelNodeTSExternalModuleReference;
  isExport: boolean;
}

declare class BabelNodeTSExternalModuleReference extends BabelNode {
  type: 'TSExternalModuleReference';
  expression: BabelNodeStringLiteral;
}

declare class BabelNodeTSNonNullExpression extends BabelNode {
  type: 'TSNonNullExpression';
  expression: BabelNodeExpression;
}

declare class BabelNodeTSExportAssignment extends BabelNode {
  type: 'TSExportAssignment';
  expression: BabelNodeExpression;
}

declare class BabelNodeTSNamespaceExportDeclaration extends BabelNode {
  type: 'TSNamespaceExportDeclaration';
  id: BabelNodeIdentifier;
}

declare class BabelNodeTSTypeAnnotation extends BabelNode {
  type: 'TSTypeAnnotation';
  typeAnnotation: BabelNodeTSType;
}

declare class BabelNodeTSTypeParameterInstantiation extends BabelNode {
  type: 'TSTypeParameterInstantiation';
  params: $ReadOnlyArray<BabelNodeTSType>;
}

declare class BabelNodeTSTypeParameterDeclaration extends BabelNode {
  type: 'TSTypeParameterDeclaration';
  params: $ReadOnlyArray<BabelNodeTSTypeParameter>;
}

declare class BabelNodeTSTypeParameter extends BabelNode {
  type: 'TSTypeParameter';
  constraint?: BabelNodeTSType;
  name: string;
}

type BabelNodeExpression =
  | BabelNodeArrayExpression
  | BabelNodeAssignmentExpression
  | BabelNodeBinaryExpression
  | BabelNodeCallExpression
  | BabelNodeConditionalExpression
  | BabelNodeFunctionExpression
  | BabelNodeIdentifier
  | BabelNodeStringLiteral
  | BabelNodeNumericLiteral
  | BabelNodeNullLiteral
  | BabelNodeBooleanLiteral
  | BabelNodeRegExpLiteral
  | BabelNodeLogicalExpression
  | BabelNodeMemberExpression
  | BabelNodeNewExpression
  | BabelNodeObjectExpression
  | BabelNodeSequenceExpression
  | BabelNodeParenthesizedExpression
  | BabelNodeThisExpression
  | BabelNodeUnaryExpression
  | BabelNodeUpdateExpression
  | BabelNodeArrowFunctionExpression
  | BabelNodeClassExpression
  | BabelNodeMetaProperty
  | BabelNodeSuper
  | BabelNodeTaggedTemplateExpression
  | BabelNodeTemplateLiteral
  | BabelNodeYieldExpression
  | BabelNodeTypeCastExpression
  | BabelNodeJSXElement
  | BabelNodeJSXFragment
  | BabelNodeAwaitExpression
  | BabelNodeBindExpression
  | BabelNodeOptionalMemberExpression
  | BabelNodePipelinePrimaryTopicReference
  | BabelNodeOptionalCallExpression
  | BabelNodeImport
  | BabelNodeDoExpression
  | BabelNodeBigIntLiteral
  | BabelNodeRecordExpression
  | BabelNodeTupleExpression
  | BabelNodeTSAsExpression
  | BabelNodeTSTypeAssertion
  | BabelNodeTSNonNullExpression;
type BabelNodeBinary = BabelNodeBinaryExpression | BabelNodeLogicalExpression;
type BabelNodeScopable =
  | BabelNodeBlockStatement
  | BabelNodeCatchClause
  | BabelNodeDoWhileStatement
  | BabelNodeForInStatement
  | BabelNodeForStatement
  | BabelNodeFunctionDeclaration
  | BabelNodeFunctionExpression
  | BabelNodeProgram
  | BabelNodeObjectMethod
  | BabelNodeSwitchStatement
  | BabelNodeWhileStatement
  | BabelNodeArrowFunctionExpression
  | BabelNodeClassExpression
  | BabelNodeClassDeclaration
  | BabelNodeForOfStatement
  | BabelNodeClassMethod
  | BabelNodeClassPrivateMethod
  | BabelNodeTSModuleBlock;
type BabelNodeBlockParent =
  | BabelNodeBlockStatement
  | BabelNodeCatchClause
  | BabelNodeDoWhileStatement
  | BabelNodeForInStatement
  | BabelNodeForStatement
  | BabelNodeFunctionDeclaration
  | BabelNodeFunctionExpression
  | BabelNodeProgram
  | BabelNodeObjectMethod
  | BabelNodeSwitchStatement
  | BabelNodeWhileStatement
  | BabelNodeArrowFunctionExpression
  | BabelNodeForOfStatement
  | BabelNodeClassMethod
  | BabelNodeClassPrivateMethod
  | BabelNodeTSModuleBlock;
type BabelNodeBlock =
  | BabelNodeBlockStatement
  | BabelNodeProgram
  | BabelNodeTSModuleBlock;
type BabelNodeStatement =
  | BabelNodeBlockStatement
  | BabelNodeBreakStatement
  | BabelNodeContinueStatement
  | BabelNodeDebuggerStatement
  | BabelNodeDoWhileStatement
  | BabelNodeEmptyStatement
  | BabelNodeExpressionStatement
  | BabelNodeForInStatement
  | BabelNodeForStatement
  | BabelNodeFunctionDeclaration
  | BabelNodeIfStatement
  | BabelNodeLabeledStatement
  | BabelNodeReturnStatement
  | BabelNodeSwitchStatement
  | BabelNodeThrowStatement
  | BabelNodeTryStatement
  | BabelNodeVariableDeclaration
  | BabelNodeWhileStatement
  | BabelNodeWithStatement
  | BabelNodeClassDeclaration
  | BabelNodeExportAllDeclaration
  | BabelNodeExportDefaultDeclaration
  | BabelNodeExportNamedDeclaration
  | BabelNodeForOfStatement
  | BabelNodeImportDeclaration
  | BabelNodeDeclareClass
  | BabelNodeDeclareFunction
  | BabelNodeDeclareInterface
  | BabelNodeDeclareModule
  | BabelNodeDeclareModuleExports
  | BabelNodeDeclareTypeAlias
  | BabelNodeDeclareOpaqueType
  | BabelNodeDeclareVariable
  | BabelNodeDeclareExportDeclaration
  | BabelNodeDeclareExportAllDeclaration
  | BabelNodeInterfaceDeclaration
  | BabelNodeOpaqueType
  | BabelNodeTypeAlias
  | BabelNodeEnumDeclaration
  | BabelNodeTSDeclareFunction
  | BabelNodeTSInterfaceDeclaration
  | BabelNodeTSTypeAliasDeclaration
  | BabelNodeTSEnumDeclaration
  | BabelNodeTSModuleDeclaration
  | BabelNodeTSImportEqualsDeclaration
  | BabelNodeTSExportAssignment
  | BabelNodeTSNamespaceExportDeclaration;
type BabelNodeTerminatorless =
  | BabelNodeBreakStatement
  | BabelNodeContinueStatement
  | BabelNodeReturnStatement
  | BabelNodeThrowStatement
  | BabelNodeYieldExpression
  | BabelNodeAwaitExpression;
type BabelNodeCompletionStatement =
  | BabelNodeBreakStatement
  | BabelNodeContinueStatement
  | BabelNodeReturnStatement
  | BabelNodeThrowStatement;
type BabelNodeConditional =
  | BabelNodeConditionalExpression
  | BabelNodeIfStatement;
type BabelNodeLoop =
  | BabelNodeDoWhileStatement
  | BabelNodeForInStatement
  | BabelNodeForStatement
  | BabelNodeWhileStatement
  | BabelNodeForOfStatement;
type BabelNodeWhile = BabelNodeDoWhileStatement | BabelNodeWhileStatement;
type BabelNodeExpressionWrapper =
  | BabelNodeExpressionStatement
  | BabelNodeParenthesizedExpression
  | BabelNodeTypeCastExpression;
type BabelNodeFor =
  | BabelNodeForInStatement
  | BabelNodeForStatement
  | BabelNodeForOfStatement;
type BabelNodeForXStatement = BabelNodeForInStatement | BabelNodeForOfStatement;
type BabelNodeFunction =
  | BabelNodeFunctionDeclaration
  | BabelNodeFunctionExpression
  | BabelNodeObjectMethod
  | BabelNodeArrowFunctionExpression
  | BabelNodeClassMethod
  | BabelNodeClassPrivateMethod;
type BabelNodeFunctionParent =
  | BabelNodeFunctionDeclaration
  | BabelNodeFunctionExpression
  | BabelNodeObjectMethod
  | BabelNodeArrowFunctionExpression
  | BabelNodeClassMethod
  | BabelNodeClassPrivateMethod;
type BabelNodePureish =
  | BabelNodeFunctionDeclaration
  | BabelNodeFunctionExpression
  | BabelNodeStringLiteral
  | BabelNodeNumericLiteral
  | BabelNodeNullLiteral
  | BabelNodeBooleanLiteral
  | BabelNodeRegExpLiteral
  | BabelNodeArrowFunctionExpression
  | BabelNodeBigIntLiteral;
type BabelNodeDeclaration =
  | BabelNodeFunctionDeclaration
  | BabelNodeVariableDeclaration
  | BabelNodeClassDeclaration
  | BabelNodeExportAllDeclaration
  | BabelNodeExportDefaultDeclaration
  | BabelNodeExportNamedDeclaration
  | BabelNodeImportDeclaration
  | BabelNodeDeclareClass
  | BabelNodeDeclareFunction
  | BabelNodeDeclareInterface
  | BabelNodeDeclareModule
  | BabelNodeDeclareModuleExports
  | BabelNodeDeclareTypeAlias
  | BabelNodeDeclareOpaqueType
  | BabelNodeDeclareVariable
  | BabelNodeDeclareExportDeclaration
  | BabelNodeDeclareExportAllDeclaration
  | BabelNodeInterfaceDeclaration
  | BabelNodeOpaqueType
  | BabelNodeTypeAlias
  | BabelNodeEnumDeclaration
  | BabelNodeTSDeclareFunction
  | BabelNodeTSInterfaceDeclaration
  | BabelNodeTSTypeAliasDeclaration
  | BabelNodeTSEnumDeclaration
  | BabelNodeTSModuleDeclaration;
type BabelNodePatternLike =
  | BabelNodeIdentifier
  | BabelNodeRestElement
  | BabelNodeAssignmentPattern
  | BabelNodeArrayPattern
  | BabelNodeObjectPattern;
type BabelNodeLVal =
  | BabelNodeIdentifier
  | BabelNodeMemberExpression
  | BabelNodeRestElement
  | BabelNodeAssignmentPattern
  | BabelNodeArrayPattern
  | BabelNodeObjectPattern
  | BabelNodeTSParameterProperty;
type BabelNodeTSEntityName = BabelNodeIdentifier | BabelNodeTSQualifiedName;
type BabelNodeLiteral =
  | BabelNodeStringLiteral
  | BabelNodeNumericLiteral
  | BabelNodeNullLiteral
  | BabelNodeBooleanLiteral
  | BabelNodeRegExpLiteral
  | BabelNodeTemplateLiteral
  | BabelNodeBigIntLiteral;
type BabelNodeImmutable =
  | BabelNodeStringLiteral
  | BabelNodeNumericLiteral
  | BabelNodeNullLiteral
  | BabelNodeBooleanLiteral
  | BabelNodeJSXAttribute
  | BabelNodeJSXClosingElement
  | BabelNodeJSXElement
  | BabelNodeJSXExpressionContainer
  | BabelNodeJSXSpreadChild
  | BabelNodeJSXOpeningElement
  | BabelNodeJSXText
  | BabelNodeJSXFragment
  | BabelNodeJSXOpeningFragment
  | BabelNodeJSXClosingFragment
  | BabelNodeBigIntLiteral;
type BabelNodeUserWhitespacable =
  | BabelNodeObjectMethod
  | BabelNodeObjectProperty
  | BabelNodeObjectTypeInternalSlot
  | BabelNodeObjectTypeCallProperty
  | BabelNodeObjectTypeIndexer
  | BabelNodeObjectTypeProperty
  | BabelNodeObjectTypeSpreadProperty;
type BabelNodeMethod =
  | BabelNodeObjectMethod
  | BabelNodeClassMethod
  | BabelNodeClassPrivateMethod;
type BabelNodeObjectMember = BabelNodeObjectMethod | BabelNodeObjectProperty;
type BabelNodeProperty =
  | BabelNodeObjectProperty
  | BabelNodeClassProperty
  | BabelNodeClassPrivateProperty;
type BabelNodeUnaryLike = BabelNodeUnaryExpression | BabelNodeSpreadElement;
type BabelNodePattern =
  | BabelNodeAssignmentPattern
  | BabelNodeArrayPattern
  | BabelNodeObjectPattern;
type BabelNodeClass = BabelNodeClassExpression | BabelNodeClassDeclaration;
type BabelNodeModuleDeclaration =
  | BabelNodeExportAllDeclaration
  | BabelNodeExportDefaultDeclaration
  | BabelNodeExportNamedDeclaration
  | BabelNodeImportDeclaration;
type BabelNodeExportDeclaration =
  | BabelNodeExportAllDeclaration
  | BabelNodeExportDefaultDeclaration
  | BabelNodeExportNamedDeclaration;
type BabelNodeModuleSpecifier =
  | BabelNodeExportSpecifier
  | BabelNodeImportDefaultSpecifier
  | BabelNodeImportNamespaceSpecifier
  | BabelNodeImportSpecifier
  | BabelNodeExportDefaultSpecifier
  | BabelNodeExportNamespaceSpecifier;
type BabelNodeFlow =
  | BabelNodeAnyTypeAnnotation
  | BabelNodeArrayTypeAnnotation
  | BabelNodeBooleanTypeAnnotation
  | BabelNodeBooleanLiteralTypeAnnotation
  | BabelNodeNullLiteralTypeAnnotation
  | BabelNodeClassImplements
  | BabelNodeDeclareClass
  | BabelNodeDeclareFunction
  | BabelNodeDeclareInterface
  | BabelNodeDeclareModule
  | BabelNodeDeclareModuleExports
  | BabelNodeDeclareTypeAlias
  | BabelNodeDeclareOpaqueType
  | BabelNodeDeclareVariable
  | BabelNodeDeclareExportDeclaration
  | BabelNodeDeclareExportAllDeclaration
  | BabelNodeDeclaredPredicate
  | BabelNodeExistsTypeAnnotation
  | BabelNodeFunctionTypeAnnotation
  | BabelNodeFunctionTypeParam
  | BabelNodeGenericTypeAnnotation
  | BabelNodeInferredPredicate
  | BabelNodeInterfaceExtends
  | BabelNodeInterfaceDeclaration
  | BabelNodeInterfaceTypeAnnotation
  | BabelNodeIntersectionTypeAnnotation
  | BabelNodeMixedTypeAnnotation
  | BabelNodeEmptyTypeAnnotation
  | BabelNodeNullableTypeAnnotation
  | BabelNodeNumberLiteralTypeAnnotation
  | BabelNodeNumberTypeAnnotation
  | BabelNodeObjectTypeAnnotation
  | BabelNodeObjectTypeInternalSlot
  | BabelNodeObjectTypeCallProperty
  | BabelNodeObjectTypeIndexer
  | BabelNodeObjectTypeProperty
  | BabelNodeObjectTypeSpreadProperty
  | BabelNodeOpaqueType
  | BabelNodeQualifiedTypeIdentifier
  | BabelNodeStringLiteralTypeAnnotation
  | BabelNodeStringTypeAnnotation
  | BabelNodeSymbolTypeAnnotation
  | BabelNodeThisTypeAnnotation
  | BabelNodeTupleTypeAnnotation
  | BabelNodeTypeofTypeAnnotation
  | BabelNodeTypeAlias
  | BabelNodeTypeAnnotation
  | BabelNodeTypeCastExpression
  | BabelNodeTypeParameter
  | BabelNodeTypeParameterDeclaration
  | BabelNodeTypeParameterInstantiation
  | BabelNodeUnionTypeAnnotation
  | BabelNodeVariance
  | BabelNodeVoidTypeAnnotation;
type BabelNodeFlowType =
  | BabelNodeAnyTypeAnnotation
  | BabelNodeArrayTypeAnnotation
  | BabelNodeBooleanTypeAnnotation
  | BabelNodeBooleanLiteralTypeAnnotation
  | BabelNodeNullLiteralTypeAnnotation
  | BabelNodeExistsTypeAnnotation
  | BabelNodeFunctionTypeAnnotation
  | BabelNodeGenericTypeAnnotation
  | BabelNodeInterfaceTypeAnnotation
  | BabelNodeIntersectionTypeAnnotation
  | BabelNodeMixedTypeAnnotation
  | BabelNodeEmptyTypeAnnotation
  | BabelNodeNullableTypeAnnotation
  | BabelNodeNumberLiteralTypeAnnotation
  | BabelNodeNumberTypeAnnotation
  | BabelNodeObjectTypeAnnotation
  | BabelNodeStringLiteralTypeAnnotation
  | BabelNodeStringTypeAnnotation
  | BabelNodeSymbolTypeAnnotation
  | BabelNodeThisTypeAnnotation
  | BabelNodeTupleTypeAnnotation
  | BabelNodeTypeofTypeAnnotation
  | BabelNodeUnionTypeAnnotation
  | BabelNodeVoidTypeAnnotation;
type BabelNodeFlowBaseAnnotation =
  | BabelNodeAnyTypeAnnotation
  | BabelNodeBooleanTypeAnnotation
  | BabelNodeNullLiteralTypeAnnotation
  | BabelNodeMixedTypeAnnotation
  | BabelNodeEmptyTypeAnnotation
  | BabelNodeNumberTypeAnnotation
  | BabelNodeStringTypeAnnotation
  | BabelNodeSymbolTypeAnnotation
  | BabelNodeThisTypeAnnotation
  | BabelNodeVoidTypeAnnotation;
type BabelNodeFlowDeclaration =
  | BabelNodeDeclareClass
  | BabelNodeDeclareFunction
  | BabelNodeDeclareInterface
  | BabelNodeDeclareModule
  | BabelNodeDeclareModuleExports
  | BabelNodeDeclareTypeAlias
  | BabelNodeDeclareOpaqueType
  | BabelNodeDeclareVariable
  | BabelNodeDeclareExportDeclaration
  | BabelNodeDeclareExportAllDeclaration
  | BabelNodeInterfaceDeclaration
  | BabelNodeOpaqueType
  | BabelNodeTypeAlias;
type BabelNodeFlowPredicate =
  | BabelNodeDeclaredPredicate
  | BabelNodeInferredPredicate;
type BabelNodeEnumBody =
  | BabelNodeEnumBooleanBody
  | BabelNodeEnumNumberBody
  | BabelNodeEnumStringBody
  | BabelNodeEnumSymbolBody;
type BabelNodeEnumMember =
  | BabelNodeEnumBooleanMember
  | BabelNodeEnumNumberMember
  | BabelNodeEnumStringMember
  | BabelNodeEnumDefaultedMember;
type BabelNodeJSX =
  | BabelNodeJSXAttribute
  | BabelNodeJSXClosingElement
  | BabelNodeJSXElement
  | BabelNodeJSXEmptyExpression
  | BabelNodeJSXExpressionContainer
  | BabelNodeJSXSpreadChild
  | BabelNodeJSXIdentifier
  | BabelNodeJSXMemberExpression
  | BabelNodeJSXNamespacedName
  | BabelNodeJSXOpeningElement
  | BabelNodeJSXSpreadAttribute
  | BabelNodeJSXText
  | BabelNodeJSXFragment
  | BabelNodeJSXOpeningFragment
  | BabelNodeJSXClosingFragment;
type BabelNodePrivate =
  | BabelNodeClassPrivateProperty
  | BabelNodeClassPrivateMethod
  | BabelNodePrivateName;
type BabelNodeTSTypeElement =
  | BabelNodeTSCallSignatureDeclaration
  | BabelNodeTSConstructSignatureDeclaration
  | BabelNodeTSPropertySignature
  | BabelNodeTSMethodSignature
  | BabelNodeTSIndexSignature;
type BabelNodeTSType =
  | BabelNodeTSAnyKeyword
  | BabelNodeTSBooleanKeyword
  | BabelNodeTSBigIntKeyword
  | BabelNodeTSNeverKeyword
  | BabelNodeTSNullKeyword
  | BabelNodeTSNumberKeyword
  | BabelNodeTSObjectKeyword
  | BabelNodeTSStringKeyword
  | BabelNodeTSSymbolKeyword
  | BabelNodeTSUndefinedKeyword
  | BabelNodeTSUnknownKeyword
  | BabelNodeTSVoidKeyword
  | BabelNodeTSThisType
  | BabelNodeTSFunctionType
  | BabelNodeTSConstructorType
  | BabelNodeTSTypeReference
  | BabelNodeTSTypePredicate
  | BabelNodeTSTypeQuery
  | BabelNodeTSTypeLiteral
  | BabelNodeTSArrayType
  | BabelNodeTSTupleType
  | BabelNodeTSOptionalType
  | BabelNodeTSRestType
  | BabelNodeTSUnionType
  | BabelNodeTSIntersectionType
  | BabelNodeTSConditionalType
  | BabelNodeTSInferType
  | BabelNodeTSParenthesizedType
  | BabelNodeTSTypeOperator
  | BabelNodeTSIndexedAccessType
  | BabelNodeTSMappedType
  | BabelNodeTSLiteralType
  | BabelNodeTSExpressionWithTypeArguments
  | BabelNodeTSImportType;
type BabelNodeTSBaseType =
  | BabelNodeTSAnyKeyword
  | BabelNodeTSBooleanKeyword
  | BabelNodeTSBigIntKeyword
  | BabelNodeTSNeverKeyword
  | BabelNodeTSNullKeyword
  | BabelNodeTSNumberKeyword
  | BabelNodeTSObjectKeyword
  | BabelNodeTSStringKeyword
  | BabelNodeTSSymbolKeyword
  | BabelNodeTSUndefinedKeyword
  | BabelNodeTSUnknownKeyword
  | BabelNodeTSVoidKeyword
  | BabelNodeTSThisType
  | BabelNodeTSLiteralType;

declare module '@babel/types' {
  declare export function arrayExpression(
    elements?: $ReadOnlyArray<
      null | BabelNodeExpression | BabelNodeSpreadElement,
    >,
  ): BabelNodeArrayExpression;
  declare export function assignmentExpression(
    operator: string,
    left: BabelNodeLVal,
    right: BabelNodeExpression,
  ): BabelNodeAssignmentExpression;
  declare export function binaryExpression(
    operator:
      | '+'
      | '-'
      | '/'
      | '%'
      | '*'
      | '**'
      | '&'
      | '|'
      | '>>'
      | '>>>'
      | '<<'
      | '^'
      | '=='
      | '==='
      | '!='
      | '!=='
      | 'in'
      | 'instanceof'
      | '>'
      | '<'
      | '>='
      | '<=',
    left: any,
    right: BabelNodeExpression,
  ): BabelNodeBinaryExpression;
  declare export function interpreterDirective(
    value: string,
  ): BabelNodeInterpreterDirective;
  declare export function directive(
    value: BabelNodeDirectiveLiteral,
  ): BabelNodeDirective;
  declare export function directiveLiteral(
    value: string,
  ): BabelNodeDirectiveLiteral;
  declare export function blockStatement(
    body: $ReadOnlyArray<BabelNodeStatement>,
    directives?: $ReadOnlyArray<BabelNodeDirective>,
  ): BabelNodeBlockStatement;
  declare export function breakStatement(
    label?: BabelNodeIdentifier,
  ): BabelNodeBreakStatement;
  declare export function callExpression(
    callee: BabelNodeExpression | BabelNodeV8IntrinsicIdentifier,
    _arguments: $ReadOnlyArray<
      | BabelNodeExpression
      | BabelNodeSpreadElement
      | BabelNodeJSXNamespacedName
      | BabelNodeArgumentPlaceholder,
    >,
  ): BabelNodeCallExpression;
  declare export function catchClause(
    param?:
      | BabelNodeIdentifier
      | BabelNodeArrayPattern
      | BabelNodeObjectPattern,
    body: BabelNodeBlockStatement,
  ): BabelNodeCatchClause;
  declare export function conditionalExpression(
    test: BabelNodeExpression,
    consequent: BabelNodeExpression,
    alternate: BabelNodeExpression,
  ): BabelNodeConditionalExpression;
  declare export function continueStatement(
    label?: BabelNodeIdentifier,
  ): BabelNodeContinueStatement;
  declare export function debuggerStatement(): BabelNodeDebuggerStatement;
  declare export function doWhileStatement(
    test: BabelNodeExpression,
    body: BabelNodeStatement,
  ): BabelNodeDoWhileStatement;
  declare export function emptyStatement(): BabelNodeEmptyStatement;
  declare export function expressionStatement(
    expression: BabelNodeExpression,
  ): BabelNodeExpressionStatement;
  declare export function file(
    program: BabelNodeProgram,
    comments: any,
    tokens: any,
  ): BabelNodeFile;
  declare export function forInStatement(
    left: BabelNodeVariableDeclaration | BabelNodeLVal,
    right: BabelNodeExpression,
    body: BabelNodeStatement,
  ): BabelNodeForInStatement;
  declare export function forStatement(
    init?: BabelNodeVariableDeclaration | BabelNodeExpression,
    test?: BabelNodeExpression,
    update?: BabelNodeExpression,
    body: BabelNodeStatement,
  ): BabelNodeForStatement;
  declare export function functionDeclaration(
    id?: BabelNodeIdentifier,
    params: $ReadOnlyArray<
      | BabelNodeIdentifier
      | BabelNodePattern
      | BabelNodeRestElement
      | BabelNodeTSParameterProperty,
    >,
    body: BabelNodeBlockStatement,
    generator?: boolean,
    async?: boolean,
  ): BabelNodeFunctionDeclaration;
  declare export function functionExpression(
    id?: BabelNodeIdentifier,
    params: $ReadOnlyArray<
      | BabelNodeIdentifier
      | BabelNodePattern
      | BabelNodeRestElement
      | BabelNodeTSParameterProperty,
    >,
    body: BabelNodeBlockStatement,
    generator?: boolean,
    async?: boolean,
  ): BabelNodeFunctionExpression;
  declare export function identifier(name: any): BabelNodeIdentifier;
  declare export function ifStatement(
    test: BabelNodeExpression,
    consequent: BabelNodeStatement,
    alternate?: BabelNodeStatement,
  ): BabelNodeIfStatement;
  declare export function labeledStatement(
    label: BabelNodeIdentifier,
    body: BabelNodeStatement,
  ): BabelNodeLabeledStatement;
  declare export function stringLiteral(value: string): BabelNodeStringLiteral;
  declare export function numericLiteral(
    value: number,
  ): BabelNodeNumericLiteral;
  declare export function nullLiteral(): BabelNodeNullLiteral;
  declare export function booleanLiteral(
    value: boolean,
  ): BabelNodeBooleanLiteral;
  declare export function regExpLiteral(
    pattern: string,
    flags?: any,
  ): BabelNodeRegExpLiteral;
  declare export function logicalExpression(
    operator: '||' | '&&' | '??',
    left: BabelNodeExpression,
    right: BabelNodeExpression,
  ): BabelNodeLogicalExpression;
  declare export function memberExpression(
    object: BabelNodeExpression,
    property: any,
    computed?: boolean,
    optional?: true | false,
  ): BabelNodeMemberExpression;
  declare export function newExpression(
    callee: BabelNodeExpression | BabelNodeV8IntrinsicIdentifier,
    _arguments: $ReadOnlyArray<
      | BabelNodeExpression
      | BabelNodeSpreadElement
      | BabelNodeJSXNamespacedName
      | BabelNodeArgumentPlaceholder,
    >,
  ): BabelNodeNewExpression;
  declare export function program(
    body: $ReadOnlyArray<BabelNodeStatement>,
    directives?: $ReadOnlyArray<BabelNodeDirective>,
    sourceType?: 'script' | 'module',
    interpreter?: BabelNodeInterpreterDirective,
  ): BabelNodeProgram;
  declare export function objectExpression(
    properties: $ReadOnlyArray<
      BabelNodeObjectMethod | BabelNodeObjectProperty | BabelNodeSpreadElement,
    >,
  ): BabelNodeObjectExpression;
  declare export function objectMethod(
    kind?: 'method' | 'get' | 'set',
    key: any,
    params: $ReadOnlyArray<
      | BabelNodeIdentifier
      | BabelNodePattern
      | BabelNodeRestElement
      | BabelNodeTSParameterProperty,
    >,
    body: BabelNodeBlockStatement,
    computed?: boolean,
    generator?: boolean,
    async?: boolean,
  ): BabelNodeObjectMethod;
  declare export function objectProperty(
    key: any,
    value: BabelNodeExpression | BabelNodePatternLike,
    computed?: boolean,
    shorthand?: any,
    decorators?: $ReadOnlyArray<BabelNodeDecorator>,
  ): BabelNodeObjectProperty;
  declare export function restElement(
    argument: BabelNodeLVal,
  ): BabelNodeRestElement;
  declare export function returnStatement(
    argument?: BabelNodeExpression,
  ): BabelNodeReturnStatement;
  declare export function sequenceExpression(
    expressions: $ReadOnlyArray<BabelNodeExpression>,
  ): BabelNodeSequenceExpression;
  declare export function parenthesizedExpression(
    expression: BabelNodeExpression,
  ): BabelNodeParenthesizedExpression;
  declare export function switchCase(
    test?: BabelNodeExpression,
    consequent: $ReadOnlyArray<BabelNodeStatement>,
  ): BabelNodeSwitchCase;
  declare export function switchStatement(
    discriminant: BabelNodeExpression,
    cases: $ReadOnlyArray<BabelNodeSwitchCase>,
  ): BabelNodeSwitchStatement;
  declare export function thisExpression(): BabelNodeThisExpression;
  declare export function throwStatement(
    argument: BabelNodeExpression,
  ): BabelNodeThrowStatement;
  declare export function tryStatement(
    block: any,
    handler?: BabelNodeCatchClause,
    finalizer?: BabelNodeBlockStatement,
  ): BabelNodeTryStatement;
  declare export function unaryExpression(
    operator: 'void' | 'throw' | 'delete' | '!' | '+' | '-' | '~' | 'typeof',
    argument: BabelNodeExpression,
    prefix?: boolean,
  ): BabelNodeUnaryExpression;
  declare export function updateExpression(
    operator: '++' | '--',
    argument: BabelNodeExpression,
    prefix?: boolean,
  ): BabelNodeUpdateExpression;
  declare export function variableDeclaration(
    kind: 'var' | 'let' | 'const',
    declarations: $ReadOnlyArray<BabelNodeVariableDeclarator>,
  ): BabelNodeVariableDeclaration;
  declare export function variableDeclarator(
    id: BabelNodeLVal,
    init?: BabelNodeExpression,
  ): BabelNodeVariableDeclarator;
  declare export function whileStatement(
    test: BabelNodeExpression,
    body: BabelNodeStatement,
  ): BabelNodeWhileStatement;
  declare export function withStatement(
    object: BabelNodeExpression,
    body: BabelNodeStatement,
  ): BabelNodeWithStatement;
  declare export function assignmentPattern(
    left:
      | BabelNodeIdentifier
      | BabelNodeObjectPattern
      | BabelNodeArrayPattern
      | BabelNodeMemberExpression,
    right: BabelNodeExpression,
  ): BabelNodeAssignmentPattern;
  declare export function arrayPattern(
    elements: $ReadOnlyArray<null | BabelNodePatternLike>,
  ): BabelNodeArrayPattern;
  declare export function arrowFunctionExpression(
    params: $ReadOnlyArray<
      | BabelNodeIdentifier
      | BabelNodePattern
      | BabelNodeRestElement
      | BabelNodeTSParameterProperty,
    >,
    body: BabelNodeBlockStatement | BabelNodeExpression,
    async?: boolean,
  ): BabelNodeArrowFunctionExpression;
  declare export function classBody(
    body: $ReadOnlyArray<
      | BabelNodeClassMethod
      | BabelNodeClassPrivateMethod
      | BabelNodeClassProperty
      | BabelNodeClassPrivateProperty
      | BabelNodeTSDeclareMethod
      | BabelNodeTSIndexSignature,
    >,
  ): BabelNodeClassBody;
  declare export function classExpression(
    id?: BabelNodeIdentifier,
    superClass?: BabelNodeExpression,
    body: BabelNodeClassBody,
    decorators?: $ReadOnlyArray<BabelNodeDecorator>,
  ): BabelNodeClassExpression;
  declare export function classDeclaration(
    id: any,
    superClass: any,
    body: any,
    decorators: any,
  ): BabelNodeClassDeclaration;
  declare export function exportAllDeclaration(
    source: BabelNodeStringLiteral,
  ): BabelNodeExportAllDeclaration;
  declare export function exportDefaultDeclaration(
    declaration:
      | BabelNodeFunctionDeclaration
      | BabelNodeTSDeclareFunction
      | BabelNodeClassDeclaration
      | BabelNodeExpression,
  ): BabelNodeExportDefaultDeclaration;
  declare export function exportNamedDeclaration(
    declaration?: any,
    specifiers?: $ReadOnlyArray<
      | BabelNodeExportSpecifier
      | BabelNodeExportDefaultSpecifier
      | BabelNodeExportNamespaceSpecifier,
    >,
    source?: BabelNodeStringLiteral,
  ): BabelNodeExportNamedDeclaration;
  declare export function exportSpecifier(
    local: BabelNodeIdentifier,
    exported: BabelNodeIdentifier,
  ): BabelNodeExportSpecifier;
  declare export function forOfStatement(
    left: BabelNodeVariableDeclaration | BabelNodeLVal,
    right: BabelNodeExpression,
    body: BabelNodeStatement,
    _await?: boolean,
  ): BabelNodeForOfStatement;
  declare export function importDeclaration(
    specifiers: $ReadOnlyArray<
      | BabelNodeImportSpecifier
      | BabelNodeImportDefaultSpecifier
      | BabelNodeImportNamespaceSpecifier,
    >,
    source: BabelNodeStringLiteral,
  ): BabelNodeImportDeclaration;
  declare export function importDefaultSpecifier(
    local: BabelNodeIdentifier,
  ): BabelNodeImportDefaultSpecifier;
  declare export function importNamespaceSpecifier(
    local: BabelNodeIdentifier,
  ): BabelNodeImportNamespaceSpecifier;
  declare export function importSpecifier(
    local: BabelNodeIdentifier,
    imported: BabelNodeIdentifier,
  ): BabelNodeImportSpecifier;
  declare export function metaProperty(
    meta: any,
    property: BabelNodeIdentifier,
  ): BabelNodeMetaProperty;
  declare export function classMethod(
    kind?: 'get' | 'set' | 'method' | 'constructor',
    key:
      | BabelNodeIdentifier
      | BabelNodeStringLiteral
      | BabelNodeNumericLiteral
      | BabelNodeExpression,
    params: $ReadOnlyArray<
      | BabelNodeIdentifier
      | BabelNodePattern
      | BabelNodeRestElement
      | BabelNodeTSParameterProperty,
    >,
    body: BabelNodeBlockStatement,
    computed?: boolean,
    _static?: boolean,
    generator?: boolean,
    async?: boolean,
  ): BabelNodeClassMethod;
  declare export function objectPattern(
    properties: $ReadOnlyArray<BabelNodeRestElement | BabelNodeObjectProperty>,
  ): BabelNodeObjectPattern;
  declare export function spreadElement(
    argument: BabelNodeExpression,
  ): BabelNodeSpreadElement;
  declare function _super(): BabelNodeSuper;
  declare export {_super as super};
  declare export function taggedTemplateExpression(
    tag: BabelNodeExpression,
    quasi: BabelNodeTemplateLiteral,
  ): BabelNodeTaggedTemplateExpression;
  declare export function templateElement(
    value: {raw: string, cooked?: string},
    tail?: boolean,
  ): BabelNodeTemplateElement;
  declare export function templateLiteral(
    quasis: $ReadOnlyArray<BabelNodeTemplateElement>,
    expressions: $ReadOnlyArray<BabelNodeExpression>,
  ): BabelNodeTemplateLiteral;
  declare export function yieldExpression(
    argument?: BabelNodeExpression,
    delegate?: any,
  ): BabelNodeYieldExpression;
  declare export function anyTypeAnnotation(): BabelNodeAnyTypeAnnotation;
  declare export function arrayTypeAnnotation(
    elementType: BabelNodeFlowType,
  ): BabelNodeArrayTypeAnnotation;
  declare export function booleanTypeAnnotation(): BabelNodeBooleanTypeAnnotation;
  declare export function booleanLiteralTypeAnnotation(
    value: boolean,
  ): BabelNodeBooleanLiteralTypeAnnotation;
  declare export function nullLiteralTypeAnnotation(): BabelNodeNullLiteralTypeAnnotation;
  declare export function classImplements(
    id: BabelNodeIdentifier,
    typeParameters?: BabelNodeTypeParameterInstantiation,
  ): BabelNodeClassImplements;
  declare export function declareClass(
    id: BabelNodeIdentifier,
    typeParameters?: BabelNodeTypeParameterDeclaration,
    _extends?: $ReadOnlyArray<BabelNodeInterfaceExtends>,
    body: BabelNodeObjectTypeAnnotation,
  ): BabelNodeDeclareClass;
  declare export function declareFunction(
    id: BabelNodeIdentifier,
  ): BabelNodeDeclareFunction;
  declare export function declareInterface(
    id: BabelNodeIdentifier,
    typeParameters?: BabelNodeTypeParameterDeclaration,
    _extends?: $ReadOnlyArray<BabelNodeInterfaceExtends>,
    body: BabelNodeObjectTypeAnnotation,
  ): BabelNodeDeclareInterface;
  declare export function declareModule(
    id: BabelNodeIdentifier | BabelNodeStringLiteral,
    body: BabelNodeBlockStatement,
    kind?: 'CommonJS' | 'ES',
  ): BabelNodeDeclareModule;
  declare export function declareModuleExports(
    typeAnnotation: BabelNodeTypeAnnotation,
  ): BabelNodeDeclareModuleExports;
  declare export function declareTypeAlias(
    id: BabelNodeIdentifier,
    typeParameters?: BabelNodeTypeParameterDeclaration,
    right: BabelNodeFlowType,
  ): BabelNodeDeclareTypeAlias;
  declare export function declareOpaqueType(
    id: BabelNodeIdentifier,
    typeParameters?: BabelNodeTypeParameterDeclaration,
    supertype?: BabelNodeFlowType,
  ): BabelNodeDeclareOpaqueType;
  declare export function declareVariable(
    id: BabelNodeIdentifier,
  ): BabelNodeDeclareVariable;
  declare export function declareExportDeclaration(
    declaration?: BabelNodeFlow,
    specifiers?: $ReadOnlyArray<
      BabelNodeExportSpecifier | BabelNodeExportNamespaceSpecifier,
    >,
    source?: BabelNodeStringLiteral,
  ): BabelNodeDeclareExportDeclaration;
  declare export function declareExportAllDeclaration(
    source: BabelNodeStringLiteral,
  ): BabelNodeDeclareExportAllDeclaration;
  declare export function declaredPredicate(
    value: BabelNodeFlow,
  ): BabelNodeDeclaredPredicate;
  declare export function existsTypeAnnotation(): BabelNodeExistsTypeAnnotation;
  declare export function functionTypeAnnotation(
    typeParameters?: BabelNodeTypeParameterDeclaration,
    params: $ReadOnlyArray<BabelNodeFunctionTypeParam>,
    rest?: BabelNodeFunctionTypeParam,
    returnType: BabelNodeFlowType,
  ): BabelNodeFunctionTypeAnnotation;
  declare export function functionTypeParam(
    name?: BabelNodeIdentifier,
    typeAnnotation: BabelNodeFlowType,
  ): BabelNodeFunctionTypeParam;
  declare export function genericTypeAnnotation(
    id: BabelNodeIdentifier | BabelNodeQualifiedTypeIdentifier,
    typeParameters?: BabelNodeTypeParameterInstantiation,
  ): BabelNodeGenericTypeAnnotation;
  declare export function inferredPredicate(): BabelNodeInferredPredicate;
  declare export function interfaceExtends(
    id: BabelNodeIdentifier | BabelNodeQualifiedTypeIdentifier,
    typeParameters?: BabelNodeTypeParameterInstantiation,
  ): BabelNodeInterfaceExtends;
  declare export function interfaceDeclaration(
    id: BabelNodeIdentifier,
    typeParameters?: BabelNodeTypeParameterDeclaration,
    _extends?: $ReadOnlyArray<BabelNodeInterfaceExtends>,
    body: BabelNodeObjectTypeAnnotation,
  ): BabelNodeInterfaceDeclaration;
  declare export function interfaceTypeAnnotation(
    _extends?: $ReadOnlyArray<BabelNodeInterfaceExtends>,
    body: BabelNodeObjectTypeAnnotation,
  ): BabelNodeInterfaceTypeAnnotation;
  declare export function intersectionTypeAnnotation(
    types: $ReadOnlyArray<BabelNodeFlowType>,
  ): BabelNodeIntersectionTypeAnnotation;
  declare export function mixedTypeAnnotation(): BabelNodeMixedTypeAnnotation;
  declare export function emptyTypeAnnotation(): BabelNodeEmptyTypeAnnotation;
  declare export function nullableTypeAnnotation(
    typeAnnotation: BabelNodeFlowType,
  ): BabelNodeNullableTypeAnnotation;
  declare export function numberLiteralTypeAnnotation(
    value: number,
  ): BabelNodeNumberLiteralTypeAnnotation;
  declare export function numberTypeAnnotation(): BabelNodeNumberTypeAnnotation;
  declare export function objectTypeAnnotation(
    properties: $ReadOnlyArray<
      BabelNodeObjectTypeProperty | BabelNodeObjectTypeSpreadProperty,
    >,
    indexers?: $ReadOnlyArray<BabelNodeObjectTypeIndexer>,
    callProperties?: $ReadOnlyArray<BabelNodeObjectTypeCallProperty>,
    internalSlots?: $ReadOnlyArray<BabelNodeObjectTypeInternalSlot>,
    exact?: boolean,
  ): BabelNodeObjectTypeAnnotation;
  declare export function objectTypeInternalSlot(
    id: BabelNodeIdentifier,
    value: BabelNodeFlowType,
    optional: boolean,
    _static: boolean,
    method: boolean,
  ): BabelNodeObjectTypeInternalSlot;
  declare export function objectTypeCallProperty(
    value: BabelNodeFlowType,
  ): BabelNodeObjectTypeCallProperty;
  declare export function objectTypeIndexer(
    id?: BabelNodeIdentifier,
    key: BabelNodeFlowType,
    value: BabelNodeFlowType,
    variance?: BabelNodeVariance,
  ): BabelNodeObjectTypeIndexer;
  declare export function objectTypeProperty(
    key: BabelNodeIdentifier | BabelNodeStringLiteral,
    value: BabelNodeFlowType,
    variance?: BabelNodeVariance,
  ): BabelNodeObjectTypeProperty;
  declare export function objectTypeSpreadProperty(
    argument: BabelNodeFlowType,
  ): BabelNodeObjectTypeSpreadProperty;
  declare export function opaqueType(
    id: BabelNodeIdentifier,
    typeParameters?: BabelNodeTypeParameterDeclaration,
    supertype?: BabelNodeFlowType,
    impltype: BabelNodeFlowType,
  ): BabelNodeOpaqueType;
  declare export function qualifiedTypeIdentifier(
    id: BabelNodeIdentifier,
    qualification: BabelNodeIdentifier | BabelNodeQualifiedTypeIdentifier,
  ): BabelNodeQualifiedTypeIdentifier;
  declare export function stringLiteralTypeAnnotation(
    value: string,
  ): BabelNodeStringLiteralTypeAnnotation;
  declare export function stringTypeAnnotation(): BabelNodeStringTypeAnnotation;
  declare export function symbolTypeAnnotation(): BabelNodeSymbolTypeAnnotation;
  declare export function thisTypeAnnotation(): BabelNodeThisTypeAnnotation;
  declare export function tupleTypeAnnotation(
    types: $ReadOnlyArray<BabelNodeFlowType>,
  ): BabelNodeTupleTypeAnnotation;
  declare export function typeofTypeAnnotation(
    argument: BabelNodeFlowType,
  ): BabelNodeTypeofTypeAnnotation;
  declare export function typeAlias(
    id: BabelNodeIdentifier,
    typeParameters?: BabelNodeTypeParameterDeclaration,
    right: BabelNodeFlowType,
  ): BabelNodeTypeAlias;
  declare export function typeAnnotation(
    typeAnnotation: BabelNodeFlowType,
  ): BabelNodeTypeAnnotation;
  declare export function typeCastExpression(
    expression: BabelNodeExpression,
    typeAnnotation: BabelNodeTypeAnnotation,
  ): BabelNodeTypeCastExpression;
  declare export function typeParameter(
    bound?: BabelNodeTypeAnnotation,
    _default?: BabelNodeFlowType,
    variance?: BabelNodeVariance,
  ): BabelNodeTypeParameter;
  declare export function typeParameterDeclaration(
    params: $ReadOnlyArray<BabelNodeTypeParameter>,
  ): BabelNodeTypeParameterDeclaration;
  declare export function typeParameterInstantiation(
    params: $ReadOnlyArray<BabelNodeFlowType>,
  ): BabelNodeTypeParameterInstantiation;
  declare export function unionTypeAnnotation(
    types: $ReadOnlyArray<BabelNodeFlowType>,
  ): BabelNodeUnionTypeAnnotation;
  declare export function variance(kind: 'minus' | 'plus'): BabelNodeVariance;
  declare export function voidTypeAnnotation(): BabelNodeVoidTypeAnnotation;
  declare export function enumDeclaration(
    id: BabelNodeIdentifier,
    body:
      | BabelNodeEnumBooleanBody
      | BabelNodeEnumNumberBody
      | BabelNodeEnumStringBody
      | BabelNodeEnumSymbolBody,
  ): BabelNodeEnumDeclaration;
  declare export function enumBooleanBody(
    members: $ReadOnlyArray<BabelNodeEnumBooleanMember>,
  ): BabelNodeEnumBooleanBody;
  declare export function enumNumberBody(
    members: $ReadOnlyArray<BabelNodeEnumNumberMember>,
  ): BabelNodeEnumNumberBody;
  declare export function enumStringBody(
    members: $ReadOnlyArray<
      BabelNodeEnumStringMember | BabelNodeEnumDefaultedMember,
    >,
  ): BabelNodeEnumStringBody;
  declare export function enumSymbolBody(
    members: $ReadOnlyArray<BabelNodeEnumDefaultedMember>,
  ): BabelNodeEnumSymbolBody;
  declare export function enumBooleanMember(
    id: BabelNodeIdentifier,
  ): BabelNodeEnumBooleanMember;
  declare export function enumNumberMember(
    id: BabelNodeIdentifier,
    init: BabelNodeNumericLiteral,
  ): BabelNodeEnumNumberMember;
  declare export function enumStringMember(
    id: BabelNodeIdentifier,
    init: BabelNodeStringLiteral,
  ): BabelNodeEnumStringMember;
  declare export function enumDefaultedMember(
    id: BabelNodeIdentifier,
  ): BabelNodeEnumDefaultedMember;
  declare export function jsxAttribute(
    name: BabelNodeJSXIdentifier | BabelNodeJSXNamespacedName,
    value?:
      | BabelNodeJSXElement
      | BabelNodeJSXFragment
      | BabelNodeStringLiteral
      | BabelNodeJSXExpressionContainer,
  ): BabelNodeJSXAttribute;
  declare export function jsxClosingElement(
    name:
      | BabelNodeJSXIdentifier
      | BabelNodeJSXMemberExpression
      | BabelNodeJSXNamespacedName,
  ): BabelNodeJSXClosingElement;
  declare export function jsxElement(
    openingElement: BabelNodeJSXOpeningElement,
    closingElement?: BabelNodeJSXClosingElement,
    children: $ReadOnlyArray<
      | BabelNodeJSXText
      | BabelNodeJSXExpressionContainer
      | BabelNodeJSXSpreadChild
      | BabelNodeJSXElement
      | BabelNodeJSXFragment,
    >,
    selfClosing: any,
  ): BabelNodeJSXElement;
  declare export function jsxEmptyExpression(): BabelNodeJSXEmptyExpression;
  declare export function jsxExpressionContainer(
    expression: BabelNodeExpression | BabelNodeJSXEmptyExpression,
  ): BabelNodeJSXExpressionContainer;
  declare export function jsxSpreadChild(
    expression: BabelNodeExpression,
  ): BabelNodeJSXSpreadChild;
  declare export function jsxIdentifier(name: string): BabelNodeJSXIdentifier;
  declare export function jsxMemberExpression(
    object: BabelNodeJSXMemberExpression | BabelNodeJSXIdentifier,
    property: BabelNodeJSXIdentifier,
  ): BabelNodeJSXMemberExpression;
  declare export function jsxNamespacedName(
    namespace: BabelNodeJSXIdentifier,
    name: BabelNodeJSXIdentifier,
  ): BabelNodeJSXNamespacedName;
  declare export function jsxOpeningElement(
    name:
      | BabelNodeJSXIdentifier
      | BabelNodeJSXMemberExpression
      | BabelNodeJSXNamespacedName,
    attributes: $ReadOnlyArray<
      BabelNodeJSXAttribute | BabelNodeJSXSpreadAttribute,
    >,
    selfClosing?: boolean,
  ): BabelNodeJSXOpeningElement;
  declare export function jsxSpreadAttribute(
    argument: BabelNodeExpression,
  ): BabelNodeJSXSpreadAttribute;
  declare export function jsxText(value: string): BabelNodeJSXText;
  declare export function jsxFragment(
    openingFragment: BabelNodeJSXOpeningFragment,
    closingFragment: BabelNodeJSXClosingFragment,
    children: $ReadOnlyArray<
      | BabelNodeJSXText
      | BabelNodeJSXExpressionContainer
      | BabelNodeJSXSpreadChild
      | BabelNodeJSXElement
      | BabelNodeJSXFragment,
    >,
  ): BabelNodeJSXFragment;
  declare export function jsxOpeningFragment(): BabelNodeJSXOpeningFragment;
  declare export function jsxClosingFragment(): BabelNodeJSXClosingFragment;
  declare export function noop(): BabelNodeNoop;
  declare export function placeholder(
    expectedNode:
      | 'Identifier'
      | 'StringLiteral'
      | 'Expression'
      | 'Statement'
      | 'Declaration'
      | 'BlockStatement'
      | 'ClassBody'
      | 'Pattern',
    name: BabelNodeIdentifier,
  ): BabelNodePlaceholder;
  declare export function v8IntrinsicIdentifier(
    name: string,
  ): BabelNodeV8IntrinsicIdentifier;
  declare export function argumentPlaceholder(): BabelNodeArgumentPlaceholder;
  declare export function awaitExpression(
    argument: BabelNodeExpression,
  ): BabelNodeAwaitExpression;
  declare export function bindExpression(
    object: any,
    callee: any,
  ): BabelNodeBindExpression;
  declare export function classProperty(
    key:
      | BabelNodeIdentifier
      | BabelNodeStringLiteral
      | BabelNodeNumericLiteral
      | BabelNodeExpression,
    value?: BabelNodeExpression,
    typeAnnotation?:
      | BabelNodeTypeAnnotation
      | BabelNodeTSTypeAnnotation
      | BabelNodeNoop,
    decorators?: $ReadOnlyArray<BabelNodeDecorator>,
    computed?: boolean,
    _static?: boolean,
  ): BabelNodeClassProperty;
  declare export function optionalMemberExpression(
    object: BabelNodeExpression,
    property: any,
    computed?: boolean,
    optional: boolean,
  ): BabelNodeOptionalMemberExpression;
  declare export function pipelineTopicExpression(
    expression: BabelNodeExpression,
  ): BabelNodePipelineTopicExpression;
  declare export function pipelineBareFunction(
    callee: BabelNodeExpression,
  ): BabelNodePipelineBareFunction;
  declare export function pipelinePrimaryTopicReference(): BabelNodePipelinePrimaryTopicReference;
  declare export function optionalCallExpression(
    callee: BabelNodeExpression,
    _arguments: $ReadOnlyArray<
      BabelNodeExpression | BabelNodeSpreadElement | BabelNodeJSXNamespacedName,
    >,
    optional: boolean,
  ): BabelNodeOptionalCallExpression;
  declare export function classPrivateProperty(
    key: BabelNodePrivateName,
    value?: BabelNodeExpression,
    decorators?: $ReadOnlyArray<BabelNodeDecorator>,
  ): BabelNodeClassPrivateProperty;
  declare export function classPrivateMethod(
    kind?: 'get' | 'set' | 'method' | 'constructor',
    key: BabelNodePrivateName,
    params: $ReadOnlyArray<
      | BabelNodeIdentifier
      | BabelNodePattern
      | BabelNodeRestElement
      | BabelNodeTSParameterProperty,
    >,
    body: BabelNodeBlockStatement,
    _static?: boolean,
  ): BabelNodeClassPrivateMethod;
  declare function _import(): BabelNodeImport;
  declare export {_import as import};
  declare export function importAttribute(
    key: any,
    value: any,
  ): BabelNodeImportAttribute;
  declare export function decorator(
    expression: BabelNodeExpression,
  ): BabelNodeDecorator;
  declare export function doExpression(
    body: BabelNodeBlockStatement,
  ): BabelNodeDoExpression;
  declare export function exportDefaultSpecifier(
    exported: BabelNodeIdentifier,
  ): BabelNodeExportDefaultSpecifier;
  declare export function exportNamespaceSpecifier(
    exported: BabelNodeIdentifier,
  ): BabelNodeExportNamespaceSpecifier;
  declare export function privateName(
    id: BabelNodeIdentifier,
  ): BabelNodePrivateName;
  declare export function bigIntLiteral(value: string): BabelNodeBigIntLiteral;
  declare export function recordExpression(
    properties: $ReadOnlyArray<
      BabelNodeObjectProperty | BabelNodeObjectMethod | BabelNodeSpreadElement,
    >,
  ): BabelNodeRecordExpression;
  declare export function tupleExpression(
    elements?: $ReadOnlyArray<
      null | BabelNodeExpression | BabelNodeSpreadElement,
    >,
  ): BabelNodeTupleExpression;
  declare export function tsParameterProperty(
    parameter: BabelNodeIdentifier | BabelNodeAssignmentPattern,
  ): BabelNodeTSParameterProperty;
  declare export function tsDeclareFunction(
    id?: BabelNodeIdentifier,
    typeParameters?: BabelNodeTSTypeParameterDeclaration | BabelNodeNoop,
    params: $ReadOnlyArray<
      | BabelNodeIdentifier
      | BabelNodePattern
      | BabelNodeRestElement
      | BabelNodeTSParameterProperty,
    >,
    returnType?: BabelNodeTSTypeAnnotation | BabelNodeNoop,
  ): BabelNodeTSDeclareFunction;
  declare export function tsDeclareMethod(
    decorators?: $ReadOnlyArray<BabelNodeDecorator>,
    key:
      | BabelNodeIdentifier
      | BabelNodeStringLiteral
      | BabelNodeNumericLiteral
      | BabelNodeExpression,
    typeParameters?: BabelNodeTSTypeParameterDeclaration | BabelNodeNoop,
    params: $ReadOnlyArray<
      | BabelNodeIdentifier
      | BabelNodePattern
      | BabelNodeRestElement
      | BabelNodeTSParameterProperty,
    >,
    returnType?: BabelNodeTSTypeAnnotation | BabelNodeNoop,
  ): BabelNodeTSDeclareMethod;
  declare export function tsQualifiedName(
    left: BabelNodeTSEntityName,
    right: BabelNodeIdentifier,
  ): BabelNodeTSQualifiedName;
  declare export function tsCallSignatureDeclaration(
    typeParameters?: BabelNodeTSTypeParameterDeclaration,
    parameters: $ReadOnlyArray<BabelNodeIdentifier | BabelNodeRestElement>,
    typeAnnotation?: BabelNodeTSTypeAnnotation,
  ): BabelNodeTSCallSignatureDeclaration;
  declare export function tsConstructSignatureDeclaration(
    typeParameters?: BabelNodeTSTypeParameterDeclaration,
    parameters: $ReadOnlyArray<BabelNodeIdentifier | BabelNodeRestElement>,
    typeAnnotation?: BabelNodeTSTypeAnnotation,
  ): BabelNodeTSConstructSignatureDeclaration;
  declare export function tsPropertySignature(
    key: BabelNodeExpression,
    typeAnnotation?: BabelNodeTSTypeAnnotation,
    initializer?: BabelNodeExpression,
  ): BabelNodeTSPropertySignature;
  declare export function tsMethodSignature(
    key: BabelNodeExpression,
    typeParameters?: BabelNodeTSTypeParameterDeclaration,
    parameters: $ReadOnlyArray<BabelNodeIdentifier | BabelNodeRestElement>,
    typeAnnotation?: BabelNodeTSTypeAnnotation,
  ): BabelNodeTSMethodSignature;
  declare export function tsIndexSignature(
    parameters: $ReadOnlyArray<BabelNodeIdentifier>,
    typeAnnotation?: BabelNodeTSTypeAnnotation,
  ): BabelNodeTSIndexSignature;
  declare export function tsAnyKeyword(): BabelNodeTSAnyKeyword;
  declare export function tsBooleanKeyword(): BabelNodeTSBooleanKeyword;
  declare export function tsBigIntKeyword(): BabelNodeTSBigIntKeyword;
  declare export function tsNeverKeyword(): BabelNodeTSNeverKeyword;
  declare export function tsNullKeyword(): BabelNodeTSNullKeyword;
  declare export function tsNumberKeyword(): BabelNodeTSNumberKeyword;
  declare export function tsObjectKeyword(): BabelNodeTSObjectKeyword;
  declare export function tsStringKeyword(): BabelNodeTSStringKeyword;
  declare export function tsSymbolKeyword(): BabelNodeTSSymbolKeyword;
  declare export function tsUndefinedKeyword(): BabelNodeTSUndefinedKeyword;
  declare export function tsUnknownKeyword(): BabelNodeTSUnknownKeyword;
  declare export function tsVoidKeyword(): BabelNodeTSVoidKeyword;
  declare export function tsThisType(): BabelNodeTSThisType;
  declare export function tsFunctionType(
    typeParameters?: BabelNodeTSTypeParameterDeclaration,
    parameters: $ReadOnlyArray<BabelNodeIdentifier | BabelNodeRestElement>,
    typeAnnotation?: BabelNodeTSTypeAnnotation,
  ): BabelNodeTSFunctionType;
  declare export function tsConstructorType(
    typeParameters?: BabelNodeTSTypeParameterDeclaration,
    parameters: $ReadOnlyArray<BabelNodeIdentifier | BabelNodeRestElement>,
    typeAnnotation?: BabelNodeTSTypeAnnotation,
  ): BabelNodeTSConstructorType;
  declare export function tsTypeReference(
    typeName: BabelNodeTSEntityName,
    typeParameters?: BabelNodeTSTypeParameterInstantiation,
  ): BabelNodeTSTypeReference;
  declare export function tsTypePredicate(
    parameterName: BabelNodeIdentifier | BabelNodeTSThisType,
    typeAnnotation?: BabelNodeTSTypeAnnotation,
    asserts?: boolean,
  ): BabelNodeTSTypePredicate;
  declare export function tsTypeQuery(
    exprName: BabelNodeTSEntityName | BabelNodeTSImportType,
  ): BabelNodeTSTypeQuery;
  declare export function tsTypeLiteral(
    members: $ReadOnlyArray<BabelNodeTSTypeElement>,
  ): BabelNodeTSTypeLiteral;
  declare export function tsArrayType(
    elementType: BabelNodeTSType,
  ): BabelNodeTSArrayType;
  declare export function tsTupleType(
    elementTypes: $ReadOnlyArray<BabelNodeTSType>,
  ): BabelNodeTSTupleType;
  declare export function tsOptionalType(
    typeAnnotation: BabelNodeTSType,
  ): BabelNodeTSOptionalType;
  declare export function tsRestType(
    typeAnnotation: BabelNodeTSType,
  ): BabelNodeTSRestType;
  declare export function tsUnionType(
    types: $ReadOnlyArray<BabelNodeTSType>,
  ): BabelNodeTSUnionType;
  declare export function tsIntersectionType(
    types: $ReadOnlyArray<BabelNodeTSType>,
  ): BabelNodeTSIntersectionType;
  declare export function tsConditionalType(
    checkType: BabelNodeTSType,
    extendsType: BabelNodeTSType,
    trueType: BabelNodeTSType,
    falseType: BabelNodeTSType,
  ): BabelNodeTSConditionalType;
  declare export function tsInferType(
    typeParameter: BabelNodeTSTypeParameter,
  ): BabelNodeTSInferType;
  declare export function tsParenthesizedType(
    typeAnnotation: BabelNodeTSType,
  ): BabelNodeTSParenthesizedType;
  declare export function tsTypeOperator(
    typeAnnotation: BabelNodeTSType,
  ): BabelNodeTSTypeOperator;
  declare export function tsIndexedAccessType(
    objectType: BabelNodeTSType,
    indexType: BabelNodeTSType,
  ): BabelNodeTSIndexedAccessType;
  declare export function tsMappedType(
    typeParameter: BabelNodeTSTypeParameter,
    typeAnnotation?: BabelNodeTSType,
  ): BabelNodeTSMappedType;
  declare export function tsLiteralType(
    literal:
      | BabelNodeNumericLiteral
      | BabelNodeStringLiteral
      | BabelNodeBooleanLiteral
      | BabelNodeBigIntLiteral,
  ): BabelNodeTSLiteralType;
  declare export function tsExpressionWithTypeArguments(
    expression: BabelNodeTSEntityName,
    typeParameters?: BabelNodeTSTypeParameterInstantiation,
  ): BabelNodeTSExpressionWithTypeArguments;
  declare export function tsInterfaceDeclaration(
    id: BabelNodeIdentifier,
    typeParameters?: BabelNodeTSTypeParameterDeclaration,
    _extends?: $ReadOnlyArray<BabelNodeTSExpressionWithTypeArguments>,
    body: BabelNodeTSInterfaceBody,
  ): BabelNodeTSInterfaceDeclaration;
  declare export function tsInterfaceBody(
    body: $ReadOnlyArray<BabelNodeTSTypeElement>,
  ): BabelNodeTSInterfaceBody;
  declare export function tsTypeAliasDeclaration(
    id: BabelNodeIdentifier,
    typeParameters?: BabelNodeTSTypeParameterDeclaration,
    typeAnnotation: BabelNodeTSType,
  ): BabelNodeTSTypeAliasDeclaration;
  declare export function tsAsExpression(
    expression: BabelNodeExpression,
    typeAnnotation: BabelNodeTSType,
  ): BabelNodeTSAsExpression;
  declare export function tsTypeAssertion(
    typeAnnotation: BabelNodeTSType,
    expression: BabelNodeExpression,
  ): BabelNodeTSTypeAssertion;
  declare export function tsEnumDeclaration(
    id: BabelNodeIdentifier,
    members: $ReadOnlyArray<BabelNodeTSEnumMember>,
  ): BabelNodeTSEnumDeclaration;
  declare export function tsEnumMember(
    id: BabelNodeIdentifier | BabelNodeStringLiteral,
    initializer?: BabelNodeExpression,
  ): BabelNodeTSEnumMember;
  declare export function tsModuleDeclaration(
    id: BabelNodeIdentifier | BabelNodeStringLiteral,
    body: BabelNodeTSModuleBlock | BabelNodeTSModuleDeclaration,
  ): BabelNodeTSModuleDeclaration;
  declare export function tsModuleBlock(
    body: $ReadOnlyArray<BabelNodeStatement>,
  ): BabelNodeTSModuleBlock;
  declare export function tsImportType(
    argument: BabelNodeStringLiteral,
    qualifier?: BabelNodeTSEntityName,
    typeParameters?: BabelNodeTSTypeParameterInstantiation,
  ): BabelNodeTSImportType;
  declare export function tsImportEqualsDeclaration(
    id: BabelNodeIdentifier,
    moduleReference: BabelNodeTSEntityName | BabelNodeTSExternalModuleReference,
  ): BabelNodeTSImportEqualsDeclaration;
  declare export function tsExternalModuleReference(
    expression: BabelNodeStringLiteral,
  ): BabelNodeTSExternalModuleReference;
  declare export function tsNonNullExpression(
    expression: BabelNodeExpression,
  ): BabelNodeTSNonNullExpression;
  declare export function tsExportAssignment(
    expression: BabelNodeExpression,
  ): BabelNodeTSExportAssignment;
  declare export function tsNamespaceExportDeclaration(
    id: BabelNodeIdentifier,
  ): BabelNodeTSNamespaceExportDeclaration;
  declare export function tsTypeAnnotation(
    typeAnnotation: BabelNodeTSType,
  ): BabelNodeTSTypeAnnotation;
  declare export function tsTypeParameterInstantiation(
    params: $ReadOnlyArray<BabelNodeTSType>,
  ): BabelNodeTSTypeParameterInstantiation;
  declare export function tsTypeParameterDeclaration(
    params: $ReadOnlyArray<BabelNodeTSTypeParameter>,
  ): BabelNodeTSTypeParameterDeclaration;
  declare export function tsTypeParameter(
    constraint?: BabelNodeTSType,
    _default?: BabelNodeTSType,
    name: string,
  ): BabelNodeTSTypeParameter;
  declare export function isArrayExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeArrayExpression;
  declare export function isAssignmentExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeAssignmentExpression;
  declare export function isBinaryExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeBinaryExpression;
  declare export function isInterpreterDirective(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeInterpreterDirective;
  declare export function isDirective(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDirective;
  declare export function isDirectiveLiteral(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDirectiveLiteral;
  declare export function isBlockStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeBlockStatement;
  declare export function isBreakStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeBreakStatement;
  declare export function isCallExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeCallExpression;
  declare export function isCatchClause(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeCatchClause;
  declare export function isConditionalExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeConditionalExpression;
  declare export function isContinueStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeContinueStatement;
  declare export function isDebuggerStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDebuggerStatement;
  declare export function isDoWhileStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDoWhileStatement;
  declare export function isEmptyStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeEmptyStatement;
  declare export function isExpressionStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeExpressionStatement;
  declare export function isFile(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeFile;
  declare export function isForInStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeForInStatement;
  declare export function isForStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeForStatement;
  declare export function isFunctionDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeFunctionDeclaration;
  declare export function isFunctionExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeFunctionExpression;
  declare export function isIdentifier(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeIdentifier;
  declare export function isIfStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeIfStatement;
  declare export function isLabeledStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeLabeledStatement;
  declare export function isStringLiteral(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeStringLiteral;
  declare export function isNumericLiteral(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeNumericLiteral;
  declare export function isNullLiteral(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeNullLiteral;
  declare export function isBooleanLiteral(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeBooleanLiteral;
  declare export function isRegExpLiteral(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeRegExpLiteral;
  declare export function isLogicalExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeLogicalExpression;
  declare export function isMemberExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeMemberExpression;
  declare export function isNewExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeNewExpression;
  declare export function isProgram(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeProgram;
  declare export function isObjectExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeObjectExpression;
  declare export function isObjectMethod(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeObjectMethod;
  declare export function isObjectProperty(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeObjectProperty;
  declare export function isRestElement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeRestElement;
  declare export function isReturnStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeReturnStatement;
  declare export function isSequenceExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeSequenceExpression;
  declare export function isParenthesizedExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeParenthesizedExpression;
  declare export function isSwitchCase(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeSwitchCase;
  declare export function isSwitchStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeSwitchStatement;
  declare export function isThisExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeThisExpression;
  declare export function isThrowStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeThrowStatement;
  declare export function isTryStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTryStatement;
  declare export function isUnaryExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeUnaryExpression;
  declare export function isUpdateExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeUpdateExpression;
  declare export function isVariableDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeVariableDeclaration;
  declare export function isVariableDeclarator(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeVariableDeclarator;
  declare export function isWhileStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeWhileStatement;
  declare export function isWithStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeWithStatement;
  declare export function isAssignmentPattern(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeAssignmentPattern;
  declare export function isArrayPattern(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeArrayPattern;
  declare export function isArrowFunctionExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeArrowFunctionExpression;
  declare export function isClassBody(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeClassBody;
  declare export function isClassExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeClassExpression;
  declare export function isClassDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeClassDeclaration;
  declare export function isExportAllDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeExportAllDeclaration;
  declare export function isExportDefaultDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeExportDefaultDeclaration;
  declare export function isExportNamedDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeExportNamedDeclaration;
  declare export function isExportSpecifier(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeExportSpecifier;
  declare export function isForOfStatement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeForOfStatement;
  declare export function isImportDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeImportDeclaration;
  declare export function isImportDefaultSpecifier(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeImportDefaultSpecifier;
  declare export function isImportNamespaceSpecifier(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeImportNamespaceSpecifier;
  declare export function isImportSpecifier(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeImportSpecifier;
  declare export function isMetaProperty(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeMetaProperty;
  declare export function isClassMethod(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeClassMethod;
  declare export function isObjectPattern(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeObjectPattern;
  declare export function isSpreadElement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeSpreadElement;
  declare export function isSuper(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeSuper;
  declare export function isTaggedTemplateExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTaggedTemplateExpression;
  declare export function isTemplateElement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTemplateElement;
  declare export function isTemplateLiteral(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTemplateLiteral;
  declare export function isYieldExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeYieldExpression;
  declare export function isAnyTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeAnyTypeAnnotation;
  declare export function isArrayTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeArrayTypeAnnotation;
  declare export function isBooleanTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeBooleanTypeAnnotation;
  declare export function isBooleanLiteralTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeBooleanLiteralTypeAnnotation;
  declare export function isNullLiteralTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeNullLiteralTypeAnnotation;
  declare export function isClassImplements(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeClassImplements;
  declare export function isDeclareClass(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDeclareClass;
  declare export function isDeclareFunction(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDeclareFunction;
  declare export function isDeclareInterface(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDeclareInterface;
  declare export function isDeclareModule(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDeclareModule;
  declare export function isDeclareModuleExports(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDeclareModuleExports;
  declare export function isDeclareTypeAlias(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDeclareTypeAlias;
  declare export function isDeclareOpaqueType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDeclareOpaqueType;
  declare export function isDeclareVariable(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDeclareVariable;
  declare export function isDeclareExportDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDeclareExportDeclaration;
  declare export function isDeclareExportAllDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDeclareExportAllDeclaration;
  declare export function isDeclaredPredicate(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDeclaredPredicate;
  declare export function isExistsTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeExistsTypeAnnotation;
  declare export function isFunctionTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeFunctionTypeAnnotation;
  declare export function isFunctionTypeParam(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeFunctionTypeParam;
  declare export function isGenericTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeGenericTypeAnnotation;
  declare export function isInferredPredicate(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeInferredPredicate;
  declare export function isInterfaceExtends(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeInterfaceExtends;
  declare export function isInterfaceDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeInterfaceDeclaration;
  declare export function isInterfaceTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeInterfaceTypeAnnotation;
  declare export function isIntersectionTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeIntersectionTypeAnnotation;
  declare export function isMixedTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeMixedTypeAnnotation;
  declare export function isEmptyTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeEmptyTypeAnnotation;
  declare export function isNullableTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeNullableTypeAnnotation;
  declare export function isNumberLiteralTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeNumberLiteralTypeAnnotation;
  declare export function isNumberTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeNumberTypeAnnotation;
  declare export function isObjectTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeObjectTypeAnnotation;
  declare export function isObjectTypeInternalSlot(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeObjectTypeInternalSlot;
  declare export function isObjectTypeCallProperty(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeObjectTypeCallProperty;
  declare export function isObjectTypeIndexer(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeObjectTypeIndexer;
  declare export function isObjectTypeProperty(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeObjectTypeProperty;
  declare export function isObjectTypeSpreadProperty(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeObjectTypeSpreadProperty;
  declare export function isOpaqueType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeOpaqueType;
  declare export function isQualifiedTypeIdentifier(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeQualifiedTypeIdentifier;
  declare export function isStringLiteralTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeStringLiteralTypeAnnotation;
  declare export function isStringTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeStringTypeAnnotation;
  declare export function isSymbolTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeSymbolTypeAnnotation;
  declare export function isThisTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeThisTypeAnnotation;
  declare export function isTupleTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTupleTypeAnnotation;
  declare export function isTypeofTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTypeofTypeAnnotation;
  declare export function isTypeAlias(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTypeAlias;
  declare export function isTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTypeAnnotation;
  declare export function isTypeCastExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTypeCastExpression;
  declare export function isTypeParameter(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTypeParameter;
  declare export function isTypeParameterDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTypeParameterDeclaration;
  declare export function isTypeParameterInstantiation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTypeParameterInstantiation;
  declare export function isUnionTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeUnionTypeAnnotation;
  declare export function isVariance(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeVariance;
  declare export function isVoidTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeVoidTypeAnnotation;
  declare export function isEnumDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeEnumDeclaration;
  declare export function isEnumBooleanBody(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeEnumBooleanBody;
  declare export function isEnumNumberBody(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeEnumNumberBody;
  declare export function isEnumStringBody(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeEnumStringBody;
  declare export function isEnumSymbolBody(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeEnumSymbolBody;
  declare export function isEnumBooleanMember(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeEnumBooleanMember;
  declare export function isEnumNumberMember(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeEnumNumberMember;
  declare export function isEnumStringMember(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeEnumStringMember;
  declare export function isEnumDefaultedMember(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeEnumDefaultedMember;
  declare export function isJSXAttribute(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeJSXAttribute;
  declare export function isJSXClosingElement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeJSXClosingElement;
  declare export function isJSXElement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeJSXElement;
  declare export function isJSXEmptyExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeJSXEmptyExpression;
  declare export function isJSXExpressionContainer(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeJSXExpressionContainer;
  declare export function isJSXSpreadChild(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeJSXSpreadChild;
  declare export function isJSXIdentifier(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeJSXIdentifier;
  declare export function isJSXMemberExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeJSXMemberExpression;
  declare export function isJSXNamespacedName(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeJSXNamespacedName;
  declare export function isJSXOpeningElement(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeJSXOpeningElement;
  declare export function isJSXSpreadAttribute(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeJSXSpreadAttribute;
  declare export function isJSXText(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeJSXText;
  declare export function isJSXFragment(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeJSXFragment;
  declare export function isJSXOpeningFragment(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeJSXOpeningFragment;
  declare export function isJSXClosingFragment(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeJSXClosingFragment;
  declare export function isNoop(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeNoop;
  declare export function isPlaceholder(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodePlaceholder;
  declare export function isV8IntrinsicIdentifier(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeV8IntrinsicIdentifier;
  declare export function isArgumentPlaceholder(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeArgumentPlaceholder;
  declare export function isAwaitExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeAwaitExpression;
  declare export function isBindExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeBindExpression;
  declare export function isClassProperty(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeClassProperty;
  declare export function isOptionalMemberExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeOptionalMemberExpression;
  declare export function isPipelineTopicExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodePipelineTopicExpression;
  declare export function isPipelineBareFunction(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodePipelineBareFunction;
  declare export function isPipelinePrimaryTopicReference(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodePipelinePrimaryTopicReference;
  declare export function isOptionalCallExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeOptionalCallExpression;
  declare export function isClassPrivateProperty(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeClassPrivateProperty;
  declare export function isClassPrivateMethod(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeClassPrivateMethod;
  declare export function isImport(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeImport;
  declare export function isImportAttribute(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeImportAttribute;
  declare export function isDecorator(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDecorator;
  declare export function isDoExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeDoExpression;
  declare export function isExportDefaultSpecifier(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeExportDefaultSpecifier;
  declare export function isExportNamespaceSpecifier(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeExportNamespaceSpecifier;
  declare export function isPrivateName(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodePrivateName;
  declare export function isBigIntLiteral(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeBigIntLiteral;
  declare export function isRecordExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeRecordExpression;
  declare export function isTupleExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTupleExpression;
  declare export function isTSParameterProperty(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSParameterProperty;
  declare export function isTSDeclareFunction(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSDeclareFunction;
  declare export function isTSDeclareMethod(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSDeclareMethod;
  declare export function isTSQualifiedName(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSQualifiedName;
  declare export function isTSCallSignatureDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSCallSignatureDeclaration;
  declare export function isTSConstructSignatureDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSConstructSignatureDeclaration;
  declare export function isTSPropertySignature(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSPropertySignature;
  declare export function isTSMethodSignature(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSMethodSignature;
  declare export function isTSIndexSignature(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSIndexSignature;
  declare export function isTSAnyKeyword(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSAnyKeyword;
  declare export function isTSBooleanKeyword(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSBooleanKeyword;
  declare export function isTSBigIntKeyword(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSBigIntKeyword;
  declare export function isTSNeverKeyword(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSNeverKeyword;
  declare export function isTSNullKeyword(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSNullKeyword;
  declare export function isTSNumberKeyword(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSNumberKeyword;
  declare export function isTSObjectKeyword(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSObjectKeyword;
  declare export function isTSStringKeyword(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSStringKeyword;
  declare export function isTSSymbolKeyword(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSSymbolKeyword;
  declare export function isTSUndefinedKeyword(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSUndefinedKeyword;
  declare export function isTSUnknownKeyword(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSUnknownKeyword;
  declare export function isTSVoidKeyword(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSVoidKeyword;
  declare export function isTSThisType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSThisType;
  declare export function isTSFunctionType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSFunctionType;
  declare export function isTSConstructorType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSConstructorType;
  declare export function isTSTypeReference(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSTypeReference;
  declare export function isTSTypePredicate(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSTypePredicate;
  declare export function isTSTypeQuery(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSTypeQuery;
  declare export function isTSTypeLiteral(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSTypeLiteral;
  declare export function isTSArrayType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSArrayType;
  declare export function isTSTupleType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSTupleType;
  declare export function isTSOptionalType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSOptionalType;
  declare export function isTSRestType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSRestType;
  declare export function isTSUnionType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSUnionType;
  declare export function isTSIntersectionType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSIntersectionType;
  declare export function isTSConditionalType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSConditionalType;
  declare export function isTSInferType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSInferType;
  declare export function isTSParenthesizedType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSParenthesizedType;
  declare export function isTSTypeOperator(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSTypeOperator;
  declare export function isTSIndexedAccessType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSIndexedAccessType;
  declare export function isTSMappedType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSMappedType;
  declare export function isTSLiteralType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSLiteralType;
  declare export function isTSExpressionWithTypeArguments(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSExpressionWithTypeArguments;
  declare export function isTSInterfaceDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSInterfaceDeclaration;
  declare export function isTSInterfaceBody(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSInterfaceBody;
  declare export function isTSTypeAliasDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSTypeAliasDeclaration;
  declare export function isTSAsExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSAsExpression;
  declare export function isTSTypeAssertion(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSTypeAssertion;
  declare export function isTSEnumDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSEnumDeclaration;
  declare export function isTSEnumMember(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSEnumMember;
  declare export function isTSModuleDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSModuleDeclaration;
  declare export function isTSModuleBlock(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSModuleBlock;
  declare export function isTSImportType(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSImportType;
  declare export function isTSImportEqualsDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSImportEqualsDeclaration;
  declare export function isTSExternalModuleReference(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSExternalModuleReference;
  declare export function isTSNonNullExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSNonNullExpression;
  declare export function isTSExportAssignment(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSExportAssignment;
  declare export function isTSNamespaceExportDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSNamespaceExportDeclaration;
  declare export function isTSTypeAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSTypeAnnotation;
  declare export function isTSTypeParameterInstantiation(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSTypeParameterInstantiation;
  declare export function isTSTypeParameterDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSTypeParameterDeclaration;
  declare export function isTSTypeParameter(
    node: ?Object,
    opts?: ?Object,
  ): node is BabelNodeTSTypeParameter;
  declare export function isExpression(
    node: ?Object,
    opts?: ?Object,
  ): node is
    | BabelNodeArrayExpression
    | BabelNodeAssignmentExpression
    | BabelNodeBinaryExpression
    | BabelNodeCallExpression
    | BabelNodeConditionalExpression
    | BabelNodeFunctionExpression
    | BabelNodeIdentifier
    | BabelNodeStringLiteral
    | BabelNodeNumericLiteral
    | BabelNodeNullLiteral
    | BabelNodeBooleanLiteral
    | BabelNodeRegExpLiteral
    | BabelNodeLogicalExpression
    | BabelNodeMemberExpression
    | BabelNodeNewExpression
    | BabelNodeObjectExpression
    | BabelNodeSequenceExpression
    | BabelNodeParenthesizedExpression
    | BabelNodeThisExpression
    | BabelNodeUnaryExpression
    | BabelNodeUpdateExpression
    | BabelNodeArrowFunctionExpression
    | BabelNodeClassExpression
    | BabelNodeMetaProperty
    | BabelNodeSuper
    | BabelNodeTaggedTemplateExpression
    | BabelNodeTemplateLiteral
    | BabelNodeYieldExpression
    | BabelNodeTypeCastExpression
    | BabelNodeJSXElement
    | BabelNodeJSXFragment
    | BabelNodeAwaitExpression
    | BabelNodeBindExpression
    | BabelNodeOptionalMemberExpression
    | BabelNodePipelinePrimaryTopicReference
    | BabelNodeOptionalCallExpression
    | BabelNodeImport
    | BabelNodeDoExpression
    | BabelNodeBigIntLiteral
    | BabelNodeTSAsExpression
    | BabelNodeTSTypeAssertion
    | BabelNodeTSNonNullExpression;
  declare export function isBinary(node: ?Object, opts?: ?Object): boolean;
  declare export function isScopable(node: ?Object, opts?: ?Object): boolean;
  declare export function isBlockParent(node: ?Object, opts?: ?Object): boolean;
  declare export function isBlock(node: ?Object, opts?: ?Object): boolean;
  declare export function isStatement(node: ?Object, opts?: ?Object): boolean;
  declare export function isTerminatorless(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isCompletionStatement(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isConditional(node: ?Object, opts?: ?Object): boolean;
  declare export function isLoop(node: ?Object, opts?: ?Object): boolean;
  declare export function isWhile(node: ?Object, opts?: ?Object): boolean;
  declare export function isExpressionWrapper(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isFor(node: ?Object, opts?: ?Object): boolean;
  declare export function isForXStatement(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isFunction(node: ?Object, opts?: ?Object): boolean;
  declare export function isFunctionParent(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isPureish(node: ?Object, opts?: ?Object): boolean;
  declare export function isDeclaration(node: ?Object, opts?: ?Object): boolean;
  declare export function isPatternLike(node: ?Object, opts?: ?Object): boolean;
  declare export function isLVal(node: ?Object, opts?: ?Object): boolean;
  declare export function isTSEntityName(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isLiteral(node: ?Object, opts?: ?Object): boolean;
  declare export function isImmutable(node: ?Object, opts?: ?Object): boolean;
  declare export function isUserWhitespacable(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isMethod(node: ?Object, opts?: ?Object): boolean;
  declare export function isObjectMember(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isProperty(node: ?Object, opts?: ?Object): boolean;
  declare export function isUnaryLike(node: ?Object, opts?: ?Object): boolean;
  declare export function isPattern(node: ?Object, opts?: ?Object): boolean;
  declare export function isClass(node: ?Object, opts?: ?Object): boolean;
  declare export function isModuleDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isExportDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isModuleSpecifier(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isFlow(node: ?Object, opts?: ?Object): boolean;
  declare export function isFlowType(node: ?Object, opts?: ?Object): boolean;
  declare export function isFlowBaseAnnotation(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isFlowDeclaration(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isFlowPredicate(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isEnumBody(node: ?Object, opts?: ?Object): boolean;
  declare export function isEnumMember(node: ?Object, opts?: ?Object): boolean;
  declare export function isJSX(node: ?Object, opts?: ?Object): boolean;
  declare export function isPrivate(node: ?Object, opts?: ?Object): boolean;
  declare export function isTSTypeElement(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isTSType(node: ?Object, opts?: ?Object): boolean;
  declare export function isTSBaseType(node: ?Object, opts?: ?Object): boolean;
  declare export function isNumberLiteral(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isRegexLiteral(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isRestProperty(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function isSpreadProperty(
    node: ?Object,
    opts?: ?Object,
  ): boolean;
  declare export function createTypeAnnotationBasedOnTypeof(
    type:
      | 'string'
      | 'number'
      | 'undefined'
      | 'boolean'
      | 'function'
      | 'object'
      | 'symbol',
  ): BabelNodeTypeAnnotation;
  declare export function createUnionTypeAnnotation(
    types: $ReadOnlyArray<BabelNodeFlowType>,
  ): BabelNodeUnionTypeAnnotation;
  declare export function createFlowUnionType(
    types: $ReadOnlyArray<BabelNodeFlowType>,
  ): BabelNodeUnionTypeAnnotation;
  declare export function buildChildren(node: {
    children: $ReadOnlyArray<
      | BabelNodeJSXText
      | BabelNodeJSXExpressionContainer
      | BabelNodeJSXSpreadChild
      | BabelNodeJSXElement
      | BabelNodeJSXFragment
      | BabelNodeJSXEmptyExpression,
    >,
  }): $ReadOnlyArray<
    | BabelNodeJSXText
    | BabelNodeJSXExpressionContainer
    | BabelNodeJSXSpreadChild
    | BabelNodeJSXElement
    | BabelNodeJSXFragment,
  >;
  declare export function clone<T>(n: T): T;
  declare export function cloneDeep<T>(n: T): T;
  declare export function cloneDeepWithoutLoc<T>(n: T): T;
  declare export function cloneNode<T>(
    n: T,
    deep?: boolean,
    withoutLoc?: boolean,
  ): T;
  declare export function cloneWithoutLoc<T>(n: T): T;
  declare export type CommentTypeShorthand = 'leading' | 'inner' | 'trailing';
  declare export function addComment<T: BabelNode>(
    node: T,
    type: CommentTypeShorthand,
    content: string,
    line?: boolean,
  ): T;
  declare export function addComments<T: BabelNode>(
    node: T,
    type: CommentTypeShorthand,
    comments: $ReadOnlyArray<BabelNodeComment>,
  ): T;
  declare export function inheritInnerComments(
    node: BabelNode,
    parent: BabelNode,
  ): void;
  declare export function inheritLeadingComments(
    node: BabelNode,
    parent: BabelNode,
  ): void;
  declare export function inheritsComments<T: BabelNode>(
    node: T,
    parent: BabelNode,
  ): void;
  declare export function inheritTrailingComments(
    node: BabelNode,
    parent: BabelNode,
  ): void;
  declare export function removeComments<T: BabelNode>(node: T): T;
  declare export function ensureBlock(
    node: BabelNode,
    key: string,
  ): BabelNodeBlockStatement;
  declare export function toBindingIdentifierName(name?: ?string): string;
  declare export function toBlock(
    node: BabelNodeStatement | BabelNodeExpression,
    parent?: BabelNodeFunction | null,
  ): BabelNodeBlockStatement;
  declare export function toComputedKey(
    node: BabelNodeMethod | BabelNodeProperty,
    key?: BabelNodeExpression | BabelNodeIdentifier,
  ): BabelNodeExpression;
  declare export function toExpression(
    node:
      | BabelNodeExpressionStatement
      | BabelNodeExpression
      | BabelNodeClass
      | BabelNodeFunction,
  ): BabelNodeExpression;
  declare export function toIdentifier(name?: ?string): string;
  declare export function toKeyAlias(
    node: BabelNodeMethod | BabelNodeProperty,
    key?: BabelNode,
  ): string;
  declare export function toStatement(
    node:
      | BabelNodeStatement
      | BabelNodeClass
      | BabelNodeFunction
      | BabelNodeAssignmentExpression,
    ignore?: boolean,
  ): BabelNodeStatement | void;
  declare export function valueToNode(value: any): BabelNodeExpression;
  declare export function removeTypeDuplicates(
    types: $ReadOnlyArray<BabelNodeFlowType>,
  ): $ReadOnlyArray<BabelNodeFlowType>;
  declare export function appendToMemberExpression(
    member: BabelNodeMemberExpression,
    append: BabelNode,
    computed?: boolean,
  ): BabelNodeMemberExpression;
  declare export function inherits<T: BabelNode>(
    child: T,
    parent: BabelNode | null | void,
  ): T;
  declare export function prependToMemberExpression(
    member: BabelNodeMemberExpression,
    prepend: BabelNodeExpression,
  ): BabelNodeMemberExpression;
  declare export function removeProperties<T>(n: T, opts: ?{}): void;
  declare export function removePropertiesDeep<T>(n: T, opts: ?{}): T;
  declare export function getBindingIdentifiers(
    node: BabelNode,
    duplicates: boolean,
    outerOnly?: boolean,
  ): {[key: string]: BabelNodeIdentifier | $ReadOnlyArray<BabelNodeIdentifier>};
  declare export function getOuterBindingIdentifiers(
    node: BabelNode,
    duplicates: boolean,
  ): {[key: string]: BabelNodeIdentifier | $ReadOnlyArray<BabelNodeIdentifier>};
  declare export type TraversalAncestors = $ReadOnlyArray<{
    node: BabelNode,
    key: string,
    index?: number,
  }>;
  declare export type TraversalHandler<T> = (
    BabelNode,
    TraversalAncestors,
    T,
  ) => void;
  declare export type TraversalHandlers<T> = {
    enter?: TraversalHandler<T>,
    exit?: TraversalHandler<T>,
  };
  declare export function traverse<T>(
    n: BabelNode,
    TraversalHandler<T> | TraversalHandlers<T>,
    state?: T,
  ): void;
  declare export function traverseFast<T>(
    n: BabelNode,
    h: TraversalHandler<T>,
    state?: T,
  ): void;
  declare export function shallowEqual(
    actual: Object,
    expected: Object,
  ): boolean;
  declare export function buildMatchMemberExpression(
    match: string,
    allowPartial?: boolean,
  ): (?BabelNode) => boolean;
  declare export function is(type: string, n: BabelNode, opts: Object): boolean;
  declare export function isBinding(
    node: BabelNode,
    parent: BabelNode,
    grandparent?: BabelNode,
  ): boolean;
  declare export function isBlockScoped(node: BabelNode): boolean;
  declare export function isImmutable(node: BabelNode): boolean;
  declare export function isLet(node: BabelNode): boolean;
  declare export function isNode(node: ?Object): node is BabelNode;
  declare export function isNodesEquivalent(a: any, b: any): boolean;
  declare export function isPlaceholderType(
    placeholderType: string,
    targetType: string,
  ): boolean;
  declare export function isReferenced(
    node: BabelNode,
    parent: BabelNode,
    grandparent?: BabelNode,
  ): boolean;
  declare export function isScope(node: BabelNode, parent: BabelNode): boolean;
  declare export function isSpecifierDefault(
    specifier: BabelNodeModuleSpecifier,
  ): boolean;
  declare export function isType(
    nodetype: ?string,
    targetType: string,
  ): boolean;
  declare export function isValidES3Identifier(name: string): boolean;
  declare export function isValidIdentifier(name: string): boolean;
  declare export function isVar(node: BabelNode): boolean;
  declare export function matchesPattern(
    node: ?BabelNode,
    match: string | $ReadOnlyArray<string>,
    allowPartial?: boolean,
  ): boolean;
  declare export function validate(
    n: BabelNode,
    key: string,
    value: mixed,
  ): void;
  declare export default {
    arrayExpression: typeof arrayExpression,
    assignmentExpression: typeof assignmentExpression,
    binaryExpression: typeof binaryExpression,
    interpreterDirective: typeof interpreterDirective,
    directive: typeof directive,
    directiveLiteral: typeof directiveLiteral,
    blockStatement: typeof blockStatement,
    breakStatement: typeof breakStatement,
    callExpression: typeof callExpression,
    catchClause: typeof catchClause,
    conditionalExpression: typeof conditionalExpression,
    continueStatement: typeof continueStatement,
    debuggerStatement: typeof debuggerStatement,
    doWhileStatement: typeof doWhileStatement,
    emptyStatement: typeof emptyStatement,
    expressionStatement: typeof expressionStatement,
    file: typeof file,
    forInStatement: typeof forInStatement,
    forStatement: typeof forStatement,
    functionDeclaration: typeof functionDeclaration,
    functionExpression: typeof functionExpression,
    identifier: typeof identifier,
    ifStatement: typeof ifStatement,
    labeledStatement: typeof labeledStatement,
    stringLiteral: typeof stringLiteral,
    numericLiteral: typeof numericLiteral,
    nullLiteral: typeof nullLiteral,
    booleanLiteral: typeof booleanLiteral,
    regExpLiteral: typeof regExpLiteral,
    logicalExpression: typeof logicalExpression,
    memberExpression: typeof memberExpression,
    newExpression: typeof newExpression,
    program: typeof program,
    objectExpression: typeof objectExpression,
    objectMethod: typeof objectMethod,
    objectProperty: typeof objectProperty,
    restElement: typeof restElement,
    returnStatement: typeof returnStatement,
    sequenceExpression: typeof sequenceExpression,
    parenthesizedExpression: typeof parenthesizedExpression,
    switchCase: typeof switchCase,
    switchStatement: typeof switchStatement,
    thisExpression: typeof thisExpression,
    throwStatement: typeof throwStatement,
    tryStatement: typeof tryStatement,
    unaryExpression: typeof unaryExpression,
    updateExpression: typeof updateExpression,
    variableDeclaration: typeof variableDeclaration,
    variableDeclarator: typeof variableDeclarator,
    whileStatement: typeof whileStatement,
    withStatement: typeof withStatement,
    assignmentPattern: typeof assignmentPattern,
    arrayPattern: typeof arrayPattern,
    arrowFunctionExpression: typeof arrowFunctionExpression,
    classBody: typeof classBody,
    classExpression: typeof classExpression,
    classDeclaration: typeof classDeclaration,
    exportAllDeclaration: typeof exportAllDeclaration,
    exportDefaultDeclaration: typeof exportDefaultDeclaration,
    exportNamedDeclaration: typeof exportNamedDeclaration,
    exportSpecifier: typeof exportSpecifier,
    forOfStatement: typeof forOfStatement,
    importDeclaration: typeof importDeclaration,
    importDefaultSpecifier: typeof importDefaultSpecifier,
    importNamespaceSpecifier: typeof importNamespaceSpecifier,
    importSpecifier: typeof importSpecifier,
    metaProperty: typeof metaProperty,
    classMethod: typeof classMethod,
    objectPattern: typeof objectPattern,
    spreadElement: typeof spreadElement,
    super: typeof _super,
    taggedTemplateExpression: typeof taggedTemplateExpression,
    templateElement: typeof templateElement,
    templateLiteral: typeof templateLiteral,
    yieldExpression: typeof yieldExpression,
    anyTypeAnnotation: typeof anyTypeAnnotation,
    arrayTypeAnnotation: typeof arrayTypeAnnotation,
    booleanTypeAnnotation: typeof booleanTypeAnnotation,
    booleanLiteralTypeAnnotation: typeof booleanLiteralTypeAnnotation,
    nullLiteralTypeAnnotation: typeof nullLiteralTypeAnnotation,
    classImplements: typeof classImplements,
    declareClass: typeof declareClass,
    declareFunction: typeof declareFunction,
    declareInterface: typeof declareInterface,
    declareModule: typeof declareModule,
    declareModuleExports: typeof declareModuleExports,
    declareTypeAlias: typeof declareTypeAlias,
    declareOpaqueType: typeof declareOpaqueType,
    declareVariable: typeof declareVariable,
    declareExportDeclaration: typeof declareExportDeclaration,
    declareExportAllDeclaration: typeof declareExportAllDeclaration,
    declaredPredicate: typeof declaredPredicate,
    existsTypeAnnotation: typeof existsTypeAnnotation,
    functionTypeAnnotation: typeof functionTypeAnnotation,
    functionTypeParam: typeof functionTypeParam,
    genericTypeAnnotation: typeof genericTypeAnnotation,
    inferredPredicate: typeof inferredPredicate,
    interfaceExtends: typeof interfaceExtends,
    interfaceDeclaration: typeof interfaceDeclaration,
    interfaceTypeAnnotation: typeof interfaceTypeAnnotation,
    intersectionTypeAnnotation: typeof intersectionTypeAnnotation,
    mixedTypeAnnotation: typeof mixedTypeAnnotation,
    emptyTypeAnnotation: typeof emptyTypeAnnotation,
    nullableTypeAnnotation: typeof nullableTypeAnnotation,
    numberLiteralTypeAnnotation: typeof numberLiteralTypeAnnotation,
    numberTypeAnnotation: typeof numberTypeAnnotation,
    objectTypeAnnotation: typeof objectTypeAnnotation,
    objectTypeInternalSlot: typeof objectTypeInternalSlot,
    objectTypeCallProperty: typeof objectTypeCallProperty,
    objectTypeIndexer: typeof objectTypeIndexer,
    objectTypeProperty: typeof objectTypeProperty,
    objectTypeSpreadProperty: typeof objectTypeSpreadProperty,
    opaqueType: typeof opaqueType,
    qualifiedTypeIdentifier: typeof qualifiedTypeIdentifier,
    stringLiteralTypeAnnotation: typeof stringLiteralTypeAnnotation,
    stringTypeAnnotation: typeof stringTypeAnnotation,
    symbolTypeAnnotation: typeof symbolTypeAnnotation,
    thisTypeAnnotation: typeof thisTypeAnnotation,
    tupleTypeAnnotation: typeof tupleTypeAnnotation,
    typeofTypeAnnotation: typeof typeofTypeAnnotation,
    typeAlias: typeof typeAlias,
    typeAnnotation: typeof typeAnnotation,
    typeCastExpression: typeof typeCastExpression,
    typeParameter: typeof typeParameter,
    typeParameterDeclaration: typeof typeParameterDeclaration,
    typeParameterInstantiation: typeof typeParameterInstantiation,
    unionTypeAnnotation: typeof unionTypeAnnotation,
    variance: typeof variance,
    voidTypeAnnotation: typeof voidTypeAnnotation,
    enumDeclaration: typeof enumDeclaration,
    enumBooleanBody: typeof enumBooleanBody,
    enumNumberBody: typeof enumNumberBody,
    enumStringBody: typeof enumStringBody,
    enumSymbolBody: typeof enumSymbolBody,
    enumBooleanMember: typeof enumBooleanMember,
    enumNumberMember: typeof enumNumberMember,
    enumStringMember: typeof enumStringMember,
    enumDefaultedMember: typeof enumDefaultedMember,
    jsxAttribute: typeof jsxAttribute,
    jsxClosingElement: typeof jsxClosingElement,
    jsxElement: typeof jsxElement,
    jsxEmptyExpression: typeof jsxEmptyExpression,
    jsxExpressionContainer: typeof jsxExpressionContainer,
    jsxSpreadChild: typeof jsxSpreadChild,
    jsxIdentifier: typeof jsxIdentifier,
    jsxMemberExpression: typeof jsxMemberExpression,
    jsxNamespacedName: typeof jsxNamespacedName,
    jsxOpeningElement: typeof jsxOpeningElement,
    jsxSpreadAttribute: typeof jsxSpreadAttribute,
    jsxText: typeof jsxText,
    jsxFragment: typeof jsxFragment,
    jsxOpeningFragment: typeof jsxOpeningFragment,
    jsxClosingFragment: typeof jsxClosingFragment,
    noop: typeof noop,
    placeholder: typeof placeholder,
    v8IntrinsicIdentifier: typeof v8IntrinsicIdentifier,
    argumentPlaceholder: typeof argumentPlaceholder,
    awaitExpression: typeof awaitExpression,
    bindExpression: typeof bindExpression,
    classProperty: typeof classProperty,
    optionalMemberExpression: typeof optionalMemberExpression,
    pipelineTopicExpression: typeof pipelineTopicExpression,
    pipelineBareFunction: typeof pipelineBareFunction,
    pipelinePrimaryTopicReference: typeof pipelinePrimaryTopicReference,
    optionalCallExpression: typeof optionalCallExpression,
    classPrivateProperty: typeof classPrivateProperty,
    classPrivateMethod: typeof classPrivateMethod,
    import: typeof _import,
    importAttribute: typeof importAttribute,
    decorator: typeof decorator,
    doExpression: typeof doExpression,
    exportDefaultSpecifier: typeof exportDefaultSpecifier,
    exportNamespaceSpecifier: typeof exportNamespaceSpecifier,
    privateName: typeof privateName,
    bigIntLiteral: typeof bigIntLiteral,
    recordExpression: typeof recordExpression,
    tupleExpression: typeof tupleExpression,
    tsParameterProperty: typeof tsParameterProperty,
    tsDeclareFunction: typeof tsDeclareFunction,
    tsDeclareMethod: typeof tsDeclareMethod,
    tsQualifiedName: typeof tsQualifiedName,
    tsCallSignatureDeclaration: typeof tsCallSignatureDeclaration,
    tsConstructSignatureDeclaration: typeof tsConstructSignatureDeclaration,
    tsPropertySignature: typeof tsPropertySignature,
    tsMethodSignature: typeof tsMethodSignature,
    tsIndexSignature: typeof tsIndexSignature,
    tsAnyKeyword: typeof tsAnyKeyword,
    tsBooleanKeyword: typeof tsBooleanKeyword,
    tsBigIntKeyword: typeof tsBigIntKeyword,
    tsNeverKeyword: typeof tsNeverKeyword,
    tsNullKeyword: typeof tsNullKeyword,
    tsNumberKeyword: typeof tsNumberKeyword,
    tsObjectKeyword: typeof tsObjectKeyword,
    tsStringKeyword: typeof tsStringKeyword,
    tsSymbolKeyword: typeof tsSymbolKeyword,
    tsUndefinedKeyword: typeof tsUndefinedKeyword,
    tsUnknownKeyword: typeof tsUnknownKeyword,
    tsVoidKeyword: typeof tsVoidKeyword,
    tsThisType: typeof tsThisType,
    tsFunctionType: typeof tsFunctionType,
    tsConstructorType: typeof tsConstructorType,
    tsTypeReference: typeof tsTypeReference,
    tsTypePredicate: typeof tsTypePredicate,
    tsTypeQuery: typeof tsTypeQuery,
    tsTypeLiteral: typeof tsTypeLiteral,
    tsArrayType: typeof tsArrayType,
    tsTupleType: typeof tsTupleType,
    tsOptionalType: typeof tsOptionalType,
    tsRestType: typeof tsRestType,
    tsUnionType: typeof tsUnionType,
    tsIntersectionType: typeof tsIntersectionType,
    tsConditionalType: typeof tsConditionalType,
    tsInferType: typeof tsInferType,
    tsParenthesizedType: typeof tsParenthesizedType,
    tsTypeOperator: typeof tsTypeOperator,
    tsIndexedAccessType: typeof tsIndexedAccessType,
    tsMappedType: typeof tsMappedType,
    tsLiteralType: typeof tsLiteralType,
    tsExpressionWithTypeArguments: typeof tsExpressionWithTypeArguments,
    tsInterfaceDeclaration: typeof tsInterfaceDeclaration,
    tsInterfaceBody: typeof tsInterfaceBody,
    tsTypeAliasDeclaration: typeof tsTypeAliasDeclaration,
    tsAsExpression: typeof tsAsExpression,
    tsTypeAssertion: typeof tsTypeAssertion,
    tsEnumDeclaration: typeof tsEnumDeclaration,
    tsEnumMember: typeof tsEnumMember,
    tsModuleDeclaration: typeof tsModuleDeclaration,
    tsModuleBlock: typeof tsModuleBlock,
    tsImportType: typeof tsImportType,
    tsImportEqualsDeclaration: typeof tsImportEqualsDeclaration,
    tsExternalModuleReference: typeof tsExternalModuleReference,
    tsNonNullExpression: typeof tsNonNullExpression,
    tsExportAssignment: typeof tsExportAssignment,
    tsNamespaceExportDeclaration: typeof tsNamespaceExportDeclaration,
    tsTypeAnnotation: typeof tsTypeAnnotation,
    tsTypeParameterInstantiation: typeof tsTypeParameterInstantiation,
    tsTypeParameterDeclaration: typeof tsTypeParameterDeclaration,
    tsTypeParameter: typeof tsTypeParameter,
    isArrayExpression: typeof isArrayExpression,
    isAssignmentExpression: typeof isAssignmentExpression,
    isBinaryExpression: typeof isBinaryExpression,
    isInterpreterDirective: typeof isInterpreterDirective,
    isDirective: typeof isDirective,
    isDirectiveLiteral: typeof isDirectiveLiteral,
    isBlockStatement: typeof isBlockStatement,
    isBreakStatement: typeof isBreakStatement,
    isCallExpression: typeof isCallExpression,
    isCatchClause: typeof isCatchClause,
    isConditionalExpression: typeof isConditionalExpression,
    isContinueStatement: typeof isContinueStatement,
    isDebuggerStatement: typeof isDebuggerStatement,
    isDoWhileStatement: typeof isDoWhileStatement,
    isEmptyStatement: typeof isEmptyStatement,
    isExpressionStatement: typeof isExpressionStatement,
    isFile: typeof isFile,
    isForInStatement: typeof isForInStatement,
    isForStatement: typeof isForStatement,
    isFunctionDeclaration: typeof isFunctionDeclaration,
    isFunctionExpression: typeof isFunctionExpression,
    isIdentifier: typeof isIdentifier,
    isIfStatement: typeof isIfStatement,
    isLabeledStatement: typeof isLabeledStatement,
    isStringLiteral: typeof isStringLiteral,
    isNumericLiteral: typeof isNumericLiteral,
    isNullLiteral: typeof isNullLiteral,
    isBooleanLiteral: typeof isBooleanLiteral,
    isRegExpLiteral: typeof isRegExpLiteral,
    isLogicalExpression: typeof isLogicalExpression,
    isMemberExpression: typeof isMemberExpression,
    isNewExpression: typeof isNewExpression,
    isProgram: typeof isProgram,
    isObjectExpression: typeof isObjectExpression,
    isObjectMethod: typeof isObjectMethod,
    isObjectProperty: typeof isObjectProperty,
    isRestElement: typeof isRestElement,
    isReturnStatement: typeof isReturnStatement,
    isSequenceExpression: typeof isSequenceExpression,
    isParenthesizedExpression: typeof isParenthesizedExpression,
    isSwitchCase: typeof isSwitchCase,
    isSwitchStatement: typeof isSwitchStatement,
    isThisExpression: typeof isThisExpression,
    isThrowStatement: typeof isThrowStatement,
    isTryStatement: typeof isTryStatement,
    isUnaryExpression: typeof isUnaryExpression,
    isUpdateExpression: typeof isUpdateExpression,
    isVariableDeclaration: typeof isVariableDeclaration,
    isVariableDeclarator: typeof isVariableDeclarator,
    isWhileStatement: typeof isWhileStatement,
    isWithStatement: typeof isWithStatement,
    isAssignmentPattern: typeof isAssignmentPattern,
    isArrayPattern: typeof isArrayPattern,
    isArrowFunctionExpression: typeof isArrowFunctionExpression,
    isClassBody: typeof isClassBody,
    isClassExpression: typeof isClassExpression,
    isClassDeclaration: typeof isClassDeclaration,
    isExportAllDeclaration: typeof isExportAllDeclaration,
    isExportDefaultDeclaration: typeof isExportDefaultDeclaration,
    isExportNamedDeclaration: typeof isExportNamedDeclaration,
    isExportSpecifier: typeof isExportSpecifier,
    isForOfStatement: typeof isForOfStatement,
    isImportDeclaration: typeof isImportDeclaration,
    isImportDefaultSpecifier: typeof isImportDefaultSpecifier,
    isImportNamespaceSpecifier: typeof isImportNamespaceSpecifier,
    isImportSpecifier: typeof isImportSpecifier,
    isMetaProperty: typeof isMetaProperty,
    isClassMethod: typeof isClassMethod,
    isObjectPattern: typeof isObjectPattern,
    isSpreadElement: typeof isSpreadElement,
    isSuper: typeof isSuper,
    isTaggedTemplateExpression: typeof isTaggedTemplateExpression,
    isTemplateElement: typeof isTemplateElement,
    isTemplateLiteral: typeof isTemplateLiteral,
    isYieldExpression: typeof isYieldExpression,
    isAnyTypeAnnotation: typeof isAnyTypeAnnotation,
    isArrayTypeAnnotation: typeof isArrayTypeAnnotation,
    isBooleanTypeAnnotation: typeof isBooleanTypeAnnotation,
    isBooleanLiteralTypeAnnotation: typeof isBooleanLiteralTypeAnnotation,
    isNullLiteralTypeAnnotation: typeof isNullLiteralTypeAnnotation,
    isClassImplements: typeof isClassImplements,
    isDeclareClass: typeof isDeclareClass,
    isDeclareFunction: typeof isDeclareFunction,
    isDeclareInterface: typeof isDeclareInterface,
    isDeclareModule: typeof isDeclareModule,
    isDeclareModuleExports: typeof isDeclareModuleExports,
    isDeclareTypeAlias: typeof isDeclareTypeAlias,
    isDeclareOpaqueType: typeof isDeclareOpaqueType,
    isDeclareVariable: typeof isDeclareVariable,
    isDeclareExportDeclaration: typeof isDeclareExportDeclaration,
    isDeclareExportAllDeclaration: typeof isDeclareExportAllDeclaration,
    isDeclaredPredicate: typeof isDeclaredPredicate,
    isExistsTypeAnnotation: typeof isExistsTypeAnnotation,
    isFunctionTypeAnnotation: typeof isFunctionTypeAnnotation,
    isFunctionTypeParam: typeof isFunctionTypeParam,
    isGenericTypeAnnotation: typeof isGenericTypeAnnotation,
    isInferredPredicate: typeof isInferredPredicate,
    isInterfaceExtends: typeof isInterfaceExtends,
    isInterfaceDeclaration: typeof isInterfaceDeclaration,
    isInterfaceTypeAnnotation: typeof isInterfaceTypeAnnotation,
    isIntersectionTypeAnnotation: typeof isIntersectionTypeAnnotation,
    isMixedTypeAnnotation: typeof isMixedTypeAnnotation,
    isEmptyTypeAnnotation: typeof isEmptyTypeAnnotation,
    isNullableTypeAnnotation: typeof isNullableTypeAnnotation,
    isNumberLiteralTypeAnnotation: typeof isNumberLiteralTypeAnnotation,
    isNumberTypeAnnotation: typeof isNumberTypeAnnotation,
    isObjectTypeAnnotation: typeof isObjectTypeAnnotation,
    isObjectTypeInternalSlot: typeof isObjectTypeInternalSlot,
    isObjectTypeCallProperty: typeof isObjectTypeCallProperty,
    isObjectTypeIndexer: typeof isObjectTypeIndexer,
    isObjectTypeProperty: typeof isObjectTypeProperty,
    isObjectTypeSpreadProperty: typeof isObjectTypeSpreadProperty,
    isOpaqueType: typeof isOpaqueType,
    isQualifiedTypeIdentifier: typeof isQualifiedTypeIdentifier,
    isStringLiteralTypeAnnotation: typeof isStringLiteralTypeAnnotation,
    isStringTypeAnnotation: typeof isStringTypeAnnotation,
    isSymbolTypeAnnotation: typeof isSymbolTypeAnnotation,
    isThisTypeAnnotation: typeof isThisTypeAnnotation,
    isTupleTypeAnnotation: typeof isTupleTypeAnnotation,
    isTypeofTypeAnnotation: typeof isTypeofTypeAnnotation,
    isTypeAlias: typeof isTypeAlias,
    isTypeAnnotation: typeof isTypeAnnotation,
    isTypeCastExpression: typeof isTypeCastExpression,
    isTypeParameter: typeof isTypeParameter,
    isTypeParameterDeclaration: typeof isTypeParameterDeclaration,
    isTypeParameterInstantiation: typeof isTypeParameterInstantiation,
    isUnionTypeAnnotation: typeof isUnionTypeAnnotation,
    isVariance: typeof isVariance,
    isVoidTypeAnnotation: typeof isVoidTypeAnnotation,
    isEnumDeclaration: typeof isEnumDeclaration,
    isEnumBooleanBody: typeof isEnumBooleanBody,
    isEnumNumberBody: typeof isEnumNumberBody,
    isEnumStringBody: typeof isEnumStringBody,
    isEnumSymbolBody: typeof isEnumSymbolBody,
    isEnumBooleanMember: typeof isEnumBooleanMember,
    isEnumNumberMember: typeof isEnumNumberMember,
    isEnumStringMember: typeof isEnumStringMember,
    isEnumDefaultedMember: typeof isEnumDefaultedMember,
    isJSXAttribute: typeof isJSXAttribute,
    isJSXClosingElement: typeof isJSXClosingElement,
    isJSXElement: typeof isJSXElement,
    isJSXEmptyExpression: typeof isJSXEmptyExpression,
    isJSXExpressionContainer: typeof isJSXExpressionContainer,
    isJSXSpreadChild: typeof isJSXSpreadChild,
    isJSXIdentifier: typeof isJSXIdentifier,
    isJSXMemberExpression: typeof isJSXMemberExpression,
    isJSXNamespacedName: typeof isJSXNamespacedName,
    isJSXOpeningElement: typeof isJSXOpeningElement,
    isJSXSpreadAttribute: typeof isJSXSpreadAttribute,
    isJSXText: typeof isJSXText,
    isJSXFragment: typeof isJSXFragment,
    isJSXOpeningFragment: typeof isJSXOpeningFragment,
    isJSXClosingFragment: typeof isJSXClosingFragment,
    isNoop: typeof isNoop,
    isPlaceholder: typeof isPlaceholder,
    isV8IntrinsicIdentifier: typeof isV8IntrinsicIdentifier,
    isArgumentPlaceholder: typeof isArgumentPlaceholder,
    isAwaitExpression: typeof isAwaitExpression,
    isBindExpression: typeof isBindExpression,
    isClassProperty: typeof isClassProperty,
    isOptionalMemberExpression: typeof isOptionalMemberExpression,
    isPipelineTopicExpression: typeof isPipelineTopicExpression,
    isPipelineBareFunction: typeof isPipelineBareFunction,
    isPipelinePrimaryTopicReference: typeof isPipelinePrimaryTopicReference,
    isOptionalCallExpression: typeof isOptionalCallExpression,
    isClassPrivateProperty: typeof isClassPrivateProperty,
    isClassPrivateMethod: typeof isClassPrivateMethod,
    isImport: typeof isImport,
    isImportAttribute: typeof isImportAttribute,
    isDecorator: typeof isDecorator,
    isDoExpression: typeof isDoExpression,
    isExportDefaultSpecifier: typeof isExportDefaultSpecifier,
    isExportNamespaceSpecifier: typeof isExportNamespaceSpecifier,
    isPrivateName: typeof isPrivateName,
    isBigIntLiteral: typeof isBigIntLiteral,
    isRecordExpression: typeof isRecordExpression,
    isTupleExpression: typeof isTupleExpression,
    isTSParameterProperty: typeof isTSParameterProperty,
    isTSDeclareFunction: typeof isTSDeclareFunction,
    isTSDeclareMethod: typeof isTSDeclareMethod,
    isTSQualifiedName: typeof isTSQualifiedName,
    isTSCallSignatureDeclaration: typeof isTSCallSignatureDeclaration,
    isTSConstructSignatureDeclaration: typeof isTSConstructSignatureDeclaration,
    isTSPropertySignature: typeof isTSPropertySignature,
    isTSMethodSignature: typeof isTSMethodSignature,
    isTSIndexSignature: typeof isTSIndexSignature,
    isTSAnyKeyword: typeof isTSAnyKeyword,
    isTSBooleanKeyword: typeof isTSBooleanKeyword,
    isTSBigIntKeyword: typeof isTSBigIntKeyword,
    isTSNeverKeyword: typeof isTSNeverKeyword,
    isTSNullKeyword: typeof isTSNullKeyword,
    isTSNumberKeyword: typeof isTSNumberKeyword,
    isTSObjectKeyword: typeof isTSObjectKeyword,
    isTSStringKeyword: typeof isTSStringKeyword,
    isTSSymbolKeyword: typeof isTSSymbolKeyword,
    isTSUndefinedKeyword: typeof isTSUndefinedKeyword,
    isTSUnknownKeyword: typeof isTSUnknownKeyword,
    isTSVoidKeyword: typeof isTSVoidKeyword,
    isTSThisType: typeof isTSThisType,
    isTSFunctionType: typeof isTSFunctionType,
    isTSConstructorType: typeof isTSConstructorType,
    isTSTypeReference: typeof isTSTypeReference,
    isTSTypePredicate: typeof isTSTypePredicate,
    isTSTypeQuery: typeof isTSTypeQuery,
    isTSTypeLiteral: typeof isTSTypeLiteral,
    isTSArrayType: typeof isTSArrayType,
    isTSTupleType: typeof isTSTupleType,
    isTSOptionalType: typeof isTSOptionalType,
    isTSRestType: typeof isTSRestType,
    isTSUnionType: typeof isTSUnionType,
    isTSIntersectionType: typeof isTSIntersectionType,
    isTSConditionalType: typeof isTSConditionalType,
    isTSInferType: typeof isTSInferType,
    isTSParenthesizedType: typeof isTSParenthesizedType,
    isTSTypeOperator: typeof isTSTypeOperator,
    isTSIndexedAccessType: typeof isTSIndexedAccessType,
    isTSMappedType: typeof isTSMappedType,
    isTSLiteralType: typeof isTSLiteralType,
    isTSExpressionWithTypeArguments: typeof isTSExpressionWithTypeArguments,
    isTSInterfaceDeclaration: typeof isTSInterfaceDeclaration,
    isTSInterfaceBody: typeof isTSInterfaceBody,
    isTSTypeAliasDeclaration: typeof isTSTypeAliasDeclaration,
    isTSAsExpression: typeof isTSAsExpression,
    isTSTypeAssertion: typeof isTSTypeAssertion,
    isTSEnumDeclaration: typeof isTSEnumDeclaration,
    isTSEnumMember: typeof isTSEnumMember,
    isTSModuleDeclaration: typeof isTSModuleDeclaration,
    isTSModuleBlock: typeof isTSModuleBlock,
    isTSImportType: typeof isTSImportType,
    isTSImportEqualsDeclaration: typeof isTSImportEqualsDeclaration,
    isTSExternalModuleReference: typeof isTSExternalModuleReference,
    isTSNonNullExpression: typeof isTSNonNullExpression,
    isTSExportAssignment: typeof isTSExportAssignment,
    isTSNamespaceExportDeclaration: typeof isTSNamespaceExportDeclaration,
    isTSTypeAnnotation: typeof isTSTypeAnnotation,
    isTSTypeParameterInstantiation: typeof isTSTypeParameterInstantiation,
    isTSTypeParameterDeclaration: typeof isTSTypeParameterDeclaration,
    isTSTypeParameter: typeof isTSTypeParameter,
    isExpression: typeof isExpression,
    isBinary: typeof isBinary,
    isScopable: typeof isScopable,
    isBlockParent: typeof isBlockParent,
    isBlock: typeof isBlock,
    isStatement: typeof isStatement,
    isTerminatorless: typeof isTerminatorless,
    isCompletionStatement: typeof isCompletionStatement,
    isConditional: typeof isConditional,
    isLoop: typeof isLoop,
    isWhile: typeof isWhile,
    isExpressionWrapper: typeof isExpressionWrapper,
    isFor: typeof isFor,
    isForXStatement: typeof isForXStatement,
    isFunction: typeof isFunction,
    isFunctionParent: typeof isFunctionParent,
    isPureish: typeof isPureish,
    isDeclaration: typeof isDeclaration,
    isPatternLike: typeof isPatternLike,
    isLVal: typeof isLVal,
    isTSEntityName: typeof isTSEntityName,
    isLiteral: typeof isLiteral,
    isImmutable: typeof isImmutable,
    isUserWhitespacable: typeof isUserWhitespacable,
    isMethod: typeof isMethod,
    isObjectMember: typeof isObjectMember,
    isProperty: typeof isProperty,
    isUnaryLike: typeof isUnaryLike,
    isPattern: typeof isPattern,
    isClass: typeof isClass,
    isModuleDeclaration: typeof isModuleDeclaration,
    isExportDeclaration: typeof isExportDeclaration,
    isModuleSpecifier: typeof isModuleSpecifier,
    isFlow: typeof isFlow,
    isFlowType: typeof isFlowType,
    isFlowBaseAnnotation: typeof isFlowBaseAnnotation,
    isFlowDeclaration: typeof isFlowDeclaration,
    isFlowPredicate: typeof isFlowPredicate,
    isEnumBody: typeof isEnumBody,
    isEnumMember: typeof isEnumMember,
    isJSX: typeof isJSX,
    isPrivate: typeof isPrivate,
    isTSTypeElement: typeof isTSTypeElement,
    isTSType: typeof isTSType,
    isTSBaseType: typeof isTSBaseType,
    isNumberLiteral: typeof isNumberLiteral,
    isRegexLiteral: typeof isRegexLiteral,
    isRestProperty: typeof isRestProperty,
    isSpreadProperty: typeof isSpreadProperty,
    createTypeAnnotationBasedOnTypeof: typeof createTypeAnnotationBasedOnTypeof,
    createUnionTypeAnnotation: typeof createUnionTypeAnnotation,
    createFlowUnionType: typeof createFlowUnionType,
    buildChildren: typeof buildChildren,
    clone: typeof clone,
    cloneDeep: typeof cloneDeep,
    cloneDeepWithoutLoc: typeof cloneDeepWithoutLoc,
    cloneNode: typeof cloneNode,
    cloneWithoutLoc: typeof cloneWithoutLoc,
    addComment: typeof addComment,
    addComments: typeof addComments,
    inheritInnerComments: typeof inheritInnerComments,
    inheritLeadingComments: typeof inheritLeadingComments,
    inheritsComments: typeof inheritsComments,
    inheritTrailingComments: typeof inheritTrailingComments,
    removeComments: typeof removeComments,
    ensureBlock: typeof ensureBlock,
    toBindingIdentifierName: typeof toBindingIdentifierName,
    toBlock: typeof toBlock,
    toComputedKey: typeof toComputedKey,
    toExpression: typeof toExpression,
    toIdentifier: typeof toIdentifier,
    toKeyAlias: typeof toKeyAlias,
    toStatement: typeof toStatement,
    valueToNode: typeof valueToNode,
    removeTypeDuplicates: typeof removeTypeDuplicates,
    appendToMemberExpression: typeof appendToMemberExpression,
    inherits: typeof inherits,
    prependToMemberExpression: typeof prependToMemberExpression,
    removeProperties: typeof removeProperties,
    removePropertiesDeep: typeof removePropertiesDeep,
    getBindingIdentifiers: typeof getBindingIdentifiers,
    getOuterBindingIdentifiers: typeof getOuterBindingIdentifiers,
    traverse: typeof traverse,
    traverseFast: typeof traverseFast,
    shallowEqual: typeof shallowEqual,
    buildMatchMemberExpression: typeof buildMatchMemberExpression,
    is: typeof is,
    isBinding: typeof isBinding,
    isBlockScoped: typeof isBlockScoped,
    isLet: typeof isLet,
    isNode: typeof isNode,
    isNodesEquivalent: typeof isNodesEquivalent,
    isPlaceholderType: typeof isPlaceholderType,
    isReferenced: typeof isReferenced,
    isScope: typeof isScope,
    isSpecifierDefault: typeof isSpecifierDefault,
    isType: typeof isType,
    isValidES3Identifier: typeof isValidES3Identifier,
    isValidIdentifier: typeof isValidIdentifier,
    isVar: typeof isVar,
    matchesPattern: typeof matchesPattern,
    validate: typeof validate,
  };
}
